const weeklyMenuHTML = (days = []) => {
  const container = document.createElement('div');

  for (const day of days) {
    const {date, name, price, diets} = day;

    const article = document.createElement('article');
    article.classList.add('day');

    const pvm = document.createElement('p');
    pvm.innerHTML = `<hr> <strong>${date || 'Ei ilmoitettu'}</strong>`;

    const nimi = document.createElement('p');
    nimi.innerHTML = `<hr> <strong>${name || 'Ei ilmoitettu'}</strong>`;

    const hinta = document.createElement('p');
    hinta.innerText = `Hinta: ${price ? price : 'Ei ilmoitettu'}`;

    const allergeenit = document.createElement('p');
    allergeenit.innerText = `Allergeenit: ${diets ? diets : 'Ei tietoa'}`;

    article.append(pvm, nimi, hinta, allergeenit);
    container.append(article);
  }

  return container;
};

export default weeklyMenuHTML;
