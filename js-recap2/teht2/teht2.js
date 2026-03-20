'use strict';

const numbers = [];

numbers.push(prompt('Syötä ensimmäinen luku:'));
numbers.push(prompt('Syötä toinen luku:'));
numbers.push(prompt('Syötä kolmas luku:'));
numbers.push(prompt('Syötä neljäs luku:'));
numbers.push(prompt('Syötä viides luku:'));

console.log('Numerot: ', numbers);
document.querySelector('#numbers').innerHTML =
  `<p>Numerot: ${numbers.join(', ')}</p>`;

const enteredNumber = prompt('Anna luku tarkistettavaksi:');
if (numbers.includes(enteredNumber)) {
  console.log(`Luku ${enteredNumber} löytyy taulukosta.`);
  document.querySelector('#num').innerHTML =
    `<p>Luku ${enteredNumber} löytyy taulukosta.</p>`;
} else {
  console.log(`Luku ${enteredNumber} ei löydy taulukosta.`);
  document.querySelector('#num').innerHTML =
    `<p>Luku ${enteredNumber} ei löydy taulukosta.</p>`;
}

numbers.pop();
console.log('Päivitetyt numerot: ', numbers);
document.querySelector('#updatedNumbers').innerHTML =
  `<p>Päivitetyt numerot: ${numbers.join(', ')}</p>`;

numbers.sort(function (a, b) {
  return a - b;
});
console.log('Lajitellut numerot: ', numbers);
document.querySelector('#sortedNumbers').innerHTML =
  `<p>Lajitellut numerot: ${numbers.join(', ')}</p>`;
