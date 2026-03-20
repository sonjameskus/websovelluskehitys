'use strict';

const numbers = [];
const even = [];
let number;

do {
  number = prompt("Syötä luku (tai kirjoita 'loppu' lopettaaksesi): ");
  if (!isNaN(number) && number.toLowerCase() !== 'loppu') {
  numbers.push(number); }
} while (number.toLowerCase() !== 'loppu');
for (let number of numbers) {
  if (number % 2 === 0) {
    even.push(number);
  }
}

document.querySelector('#even').innerHTML =
  `<p>Ohjelma päättyi. Parilliset numerot: ${even.join(', ')}</p>`;
