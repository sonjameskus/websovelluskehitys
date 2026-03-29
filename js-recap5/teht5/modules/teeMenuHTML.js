const teeMenuHTML = (courses = []) => {
  const container = document.createElement('div');

  for (const course of courses) {
    const {name, price, diets} = course;

    const article = document.createElement('article');
    article.classList.add('course');

    const nimi = document.createElement('p');
    nimi.innerHTML = `<hr> <strong>${name || 'Ei ilmoitettu'}</strong>`;

    const hinta = document.createElement('p');
    hinta.innerText = `Hinta: ${price ? price : 'Ei ilmoitettu'}`;

    const allergeenit = document.createElement('p');
    allergeenit.innerText = `Allergeenit: ${diets ? diets : 'Ei tietoa'}`;

    article.append(nimi, hinta, allergeenit);
    container.append(article);
  }

  return container;
};

export default teeMenuHTML;
