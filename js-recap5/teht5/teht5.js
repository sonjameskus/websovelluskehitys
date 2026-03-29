'use strict';

import fetchData from './modules/utils.js';
import ravintolaRivi from './modules/ravintolaRivi.js';
import ravintolaModal from './modules/ravintolaModal.js';
import apiUrl from './modules/variables.js';

const taulukko = document.querySelector('#target');
const modal = document.querySelector('dialog');
const filter = document.querySelector('#filter');

const haeRavintolat = async () => {
  try {
    return await fetchData(apiUrl + '/restaurants');
  } catch (error) {
    console.log('Virhe!!!!', error);
  }
};

const haePaivanMenu = async (id, lang) => {
  try {
    return await fetchData(apiUrl + `/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    throw error;
  }
};

const renderRavintolat = (restaurants) => {
  taulukko.innerHTML = `
    <tr>
      <th>Nimi</th>
      <th>Osoite</th>
      <th>Kaupunki</th>
      <th>Yritys</th>
    </tr>
  `;

  restaurants.forEach((restaurant) => {
    const tr = ravintolaRivi(restaurant);

    tr.addEventListener('click', async () => {
      const kaikkiRivit = document.querySelectorAll('tr');
      kaikkiRivit.forEach((r) => r.classList.remove('highlight'));
      tr.classList.add('highlight');

      modal.innerHTML = '';
      modal.showModal();

      try {
        const pMenu = await haePaivanMenu(restaurant._id, 'fi');
        const modalDOM = ravintolaModal(restaurant, pMenu);
        modal.append(modalDOM);
      } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.innerText = 'Menun hakeminen epäonnistui!';
        modal.append(errorMsg);
      }

      const closeBtn = document.createElement('button');
      closeBtn.innerText = 'Sulje';
      modal.append(closeBtn);

      closeBtn.addEventListener('click', () => {
        modal.close();
      });
    });

    taulukko.append(tr);
  }
)};

(async () => {
  const restaurants = await haeRavintolat();

  if (!restaurants) {
    modal.innerHTML = '<p>Ravintoloiden haku epäonnistui</p>';
    modal.showModal();
    return;
  }

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  renderRavintolat(restaurants);

  filter.addEventListener('change', () => {
    const value = filter.value;

    if (value === 'all') {
      renderRavintolat(restaurants);
    } else {
      const filtered = restaurants.filter((r) => r.company === value);
      renderRavintolat(filtered);
    }
  });
})();
