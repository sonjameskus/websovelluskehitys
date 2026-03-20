'use strict';

const numOfMovies = prompt('Syötä elokuvien lukumäärä: ');
const movies = [];

for (let i = 0; i < numOfMovies; i++) {
  const nimi = prompt('Syötä elokuvan nimi:');
  const arvosana = prompt('Syötä elokuvalle arvosana (1-5): ');
  if (arvosana < 1 || arvosana > 5) {
    alert('Arvosanan tulee olla välillä 1-5. Yritä uudestaan.');
    i--;
    continue;
  }
  movies.push({
    nimi: nimi,
    arvosana: arvosana,
  });
}

movies.sort(function (a, b) {
  return b.arvosana - a.arvosana;
});

for (const movie of movies) {
  document.querySelector('#target').innerHTML +=
    `<li>${movie.nimi} - Arvosana: ${movie.arvosana}</li>`;
}
document
  .querySelector('#suosikki')
  .insertAdjacentHTML('afterbegin', movies[0].nimi);
