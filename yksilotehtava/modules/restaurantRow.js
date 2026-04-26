const restaurantRow = (restaurant) => {
  const {name, address, city, company} = restaurant;
  const tr = document.createElement('tr');

  const nimiTd = document.createElement('td');
  nimiTd.innerText = name;

  const osoiteTd = document.createElement('td');
  osoiteTd.innerText = address;

  const kaupunkiTd = document.createElement('td');
  kaupunkiTd.innerText = city;

  tr.append(nimiTd, osoiteTd, kaupunkiTd);
  return tr;
};

export default restaurantRow;
