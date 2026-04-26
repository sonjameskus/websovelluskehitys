'use strict';

import fetchData from './modules/utils.js';
import restaurantModal from './modules/restaurantModal.js';
import restaurantRow from './modules/restaurantRow.js';
import { apiUrl } from './modules/variables.js';

const table = document.querySelector('#target');
const modal = document.querySelector('dialog');
const status = document.querySelector('#status');
const cityFilter = document.querySelector('#cityFilter');

const menuToggleBtn = document.querySelector('#menuToggle');
menuToggleBtn.innerText = 'Katso viikon menu';

let menuMode = 'daily';
let allRestaurants = [];
let selectedCity = 'all';


document.querySelector('#menuToggle').addEventListener('click', () => {
  menuMode = menuMode === 'daily' ? 'weekly' : 'daily';

  document.querySelector('#menuToggle').innerText =
    menuMode === 'weekly'
      ? 'Katso päivän menu'
      : 'Katso viikon menu';
});


document.querySelector('#haku-btn').addEventListener('click', geoFindMe);

async function loadRestaurants() {
  return await fetchData(apiUrl + '/restaurants');
}

function geoFindMe() {
  status.textContent = 'Locating…';

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation not supported';
    return;
  }

  loadRestaurants()
    .then((restaurants) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => success(pos, restaurants),
        error
      );
    })
    .catch((err) => {
      console.error(err);
      status.textContent = 'API error';
    });
}


function success(position, restaurants) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  for (const r of restaurants) {
    const rLat = r.location.coordinates[1];
    const rLon = r.location.coordinates[0];

    r.distance = distance(lat, lon, rLat, rLon);
  }

  allRestaurants = restaurants;

  populateCities(allRestaurants);
  updateView();

  status.textContent = '';
}


function error() {
  status.textContent = 'Unable to retrieve your location';
}


function distance(lat1, lon1, lat2, lon2) {
  return Math.sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2);
}


function updateView() {
  let list = [...allRestaurants];

  if (selectedCity !== 'all') {
    list = list.filter(r => r.city === selectedCity);
  }

  list.sort((a, b) => a.distance - b.distance);

  renderRestaurants(list);
}


function getCities(restaurants) {
  const cities = [...new Set(restaurants.map(r => r.city))];
  return cities.sort();
}


function populateCities(restaurants) {
  cityFilter.innerHTML = `<option value="all">Kaikki kaupungit</option>`;

  const cities = getCities(restaurants);

  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityFilter.append(option);
  });
}


cityFilter.addEventListener('change', (e) => {
  selectedCity = e.target.value;
  updateView();
});


function renderRestaurants(restaurants) {
  table.innerHTML = `
    <tr>
      <th>Nimi</th>
      <th>Osoite</th>
      <th>Kaupunki</th>
    </tr>
  `;

  restaurants.forEach((restaurant) => {
    const tr = restaurantRow(restaurant);

    tr.addEventListener('click', async () => {
  modal.innerHTML = '';
  modal.showModal();

  try {
    const url =
      menuMode === 'weekly'
        ? `/restaurants/weekly/${restaurant._id}/fi`
        : `/restaurants/daily/${restaurant._id}/fi`;

    const menu = await fetchData(apiUrl + url);

    const content = restaurantModal(restaurant, menu, menuMode);
    modal.append(content);

    const favBtn = document.createElement('button');
    favBtn.textContent = '♥ Aseta suosikiksi';

    favBtn.addEventListener('click', async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('Kirjaudu sisään ensin');
        return;
      }

      try {
        await fetch(apiUrl + '/users', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            favouriteRestaurant: restaurant._id,
          }),
        });

        alert('Suosikki tallennettu!');
      } catch (err) {
        alert('Virhe suosikin tallennuksessa');
        console.error(err);
      }
    });

    modal.append(favBtn);

  } catch (err) {
    modal.append('Menun haku epäonnistui');
  }

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Sulje';
  closeBtn.addEventListener('click', () => modal.close());

  modal.append(closeBtn);
});


    table.append(tr);
  });
}

