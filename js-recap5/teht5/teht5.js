'use strict';

import fetchData from './modules/utils.js';
import ravintolaRivi from './modules/ravintolaRivi.js';
import ravintolaModal from './modules/ravintolaModal.js';
import apiUrl from './modules/variables.js';

const taulukko = document.querySelector('#target');
const modal = document.querySelector('dialog');

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

(async () => {
  const restaurants = await haeRavintolat();

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  for (const restaurant of restaurants) {
    const tr = ravintolaRivi(restaurant);

    tr.addEventListener('click', async () => {
      const kaikkiRivit = document.querySelectorAll('tr');
      kaikkiRivit.forEach((r) => r.classList.remove('highlight'));
      tr.classList.add('highlight');
      console.log('klikattiin', restaurant.name);

      modal.innerText = '';

      modal.showModal();

      const pMenu = await haePaivanMenu(restaurant._id, 'fi');

      const modalDOM = ravintolaModal(restaurant, pMenu);

      modal.append(modalDOM);

      const closeBtn = document.createElement('button');
      closeBtn.innerText = 'Sulje';
      modal.insertAdjacentElement('beforeend', closeBtn);

      closeBtn.addEventListener('click', () => {
        modal.close();
      });
    });

    taulukko.append(tr);
  }
})();
