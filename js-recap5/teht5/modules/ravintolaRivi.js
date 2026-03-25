const ravintolaRivi = (restaurant) => {
  const {name, address, city, company} = restaurant;
  const tr = document.createElement('tr');

  const nimiTd = document.createElement('td');
  nimiTd.innerText = name;

  const osoiteTd = document.createElement('td');
  osoiteTd.innerText = address;

  const kaupunkiTd = document.createElement('td');
  kaupunkiTd.innerText = city;

  const yritysTd = document.createElement('td');
  yritysTd.innerText = company;

  tr.append(nimiTd, osoiteTd, kaupunkiTd, yritysTd);
  return tr;
};

export default ravintolaRivi;
