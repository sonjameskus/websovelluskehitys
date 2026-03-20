'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Hedelmät:', fruits);

console.log('Hedelmien määrä:', fruits.length);

document.querySelector('#fruits').innerHTML =
  `<p>Hedelmien määrä:  ${fruits.length}</p>`;

console.log('Hedelmä indeksillä 2:', fruits[2]);

let lastFruit = fruits[fruits.length - 1];
console.log('Viimeinen hedelmä:', lastFruit);

document.querySelector('#fruit').innerHTML =
  `<p>Viimeinen hedelmä: ${lastFruit}</p>`;

const vegetables = [];
vegetables.push(prompt('Syötä ensimmäinen vihannes:'));
vegetables.push(prompt('Syötä toinen vihannes:'));
vegetables.push(prompt('Syötä kolmas vihannes:'));
console.log('Vihannekset:', vegetables);
console.log('Vihannesten määrä:', vegetables.length);
document.querySelector('#vegetables').innerHTML =
  `<p>Vihannesten määrä: ${vegetables.length}</p>`;
