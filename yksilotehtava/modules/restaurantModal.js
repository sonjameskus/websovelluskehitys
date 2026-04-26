import menuHTML from './menuHTML.js';
import weeklyMenuHTML from './weeklyMenyHTML.js';

const restaurantModal = (restaurant, menu, menuMode) => {
  const container = document.createElement('div');
  const {name, address, postalCode, city, phone, company} = restaurant;

  const nimi = document.createElement('h3');
  nimi.innerText = name;

  const osoite = document.createElement('p');
  osoite.innerText = address;

  const postiNumero = document.createElement('p');
  postiNumero.innerText = postalCode;

  const paikkaKunta = document.createElement('p');
  paikkaKunta.innerText = city;

  const puhelinNumero = document.createElement('p');
  puhelinNumero.innerText = phone;

  const yritys = document.createElement('p');
  yritys.innerText = company;

  container.append(
    nimi,
    osoite,
    postiNumero,
    paikkaKunta,
    puhelinNumero,
    yritys
  );

  if (menuMode === "daily") {
    const menuElement = menuHTML(menu.courses || []);
    container.append(menuElement);
  }

  if (menuMode === "weekly") {
    const weeklyElement = weeklyMenuHTML(menu.days || []);
    container.append(weeklyElement);
  }

  return container;

};

export default restaurantModal;
