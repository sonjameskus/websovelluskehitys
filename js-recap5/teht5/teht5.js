'use strict';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

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
    console.log('Virhe!!!!', error);
  }
};

const teeMenuHTML = (courses) => {
  let html = '';
  for (const course of courses) {
    html += `
    <article></article>
    <hr>
    <p><strong>${course.name}</strong></p>
    <p>Hinta: ${course.price}</p>
    <p>Allergeenit: ${course.diets}</p>
    `;
  }
  return html;
};

const main = async () => {
  const restaurants = await haeRavintolat();
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
  const table = document.querySelector('table');
  for (const restaurant of restaurants) {
    const rivi = document.createElement('tr');
    rivi.addEventListener('click', async () => {
      const kaikkiRivit = document.querySelectorAll('tr');
      kaikkiRivit.forEach((r) => r.classList.remove('highlight'));
      rivi.classList.add('highlight');
      console.log('klikattiin', restaurant.name);
      const info = document.querySelector('dialog');

      info.innerText = '';

      const nimi = document.createElement('h3');
      nimi.innerText = restaurant.name;

      const osoite = document.createElement('p');
      osoite.innerText = restaurant.address;

      const postiNumero = document.createElement('p');
      postiNumero.innerText = restaurant.postalCode;

      const paikkaKunta = document.createElement('p');
      paikkaKunta.innerText = restaurant.city;

      const puhelinNumero = document.createElement('p');
      puhelinNumero.innerText = restaurant.phone;

      const yritys = document.createElement('p');
      yritys.innerText = restaurant.company;

      info.appendChild(nimi);
      info.appendChild(osoite);
      info.appendChild(postiNumero);
      info.appendChild(paikkaKunta);
      info.appendChild(puhelinNumero);
      info.appendChild(yritys);

      info.showModal();

      const pMenu = await haePaivanMenu(restaurant._id, restaurant.lang);
      console.log(pMenu);
      const menuHTML = teeMenuHTML(pMenu.courses);
      console.log(menuHTML);
      info.insertAdjacentHTML('beforeend', menuHTML);

      const closeBtn = document.createElement('button');
      closeBtn.innerText = 'Sulje';
      info.insertAdjacentElement('beforeend', closeBtn);

      closeBtn.addEventListener('click', () => {
        info.close();
      });
    });
    const nimiSolu = document.createElement('td');
    const osoiteSolu = document.createElement('td');

    nimiSolu.innerText = restaurant.name;
    osoiteSolu.innerText = restaurant.address;

    rivi.append(nimiSolu, osoiteSolu);
    table.append(rivi);
  }
};

main();
