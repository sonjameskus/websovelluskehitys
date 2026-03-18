'use strict'

let number;
number = prompt('Anna positiivinen kokonaisluku:');
let sum = 0;


for (let i = 1; i <= number; i++) {
  sum += i;
}
if (number < 0) {
  document.querySelector('#sum').innerHTML = 'Anna positiivinen kokonaisluku!';
} else {
  document.querySelector('#sum').innerHTML = 'Lukujen 1-' + number + ' summa on ' + sum + '.';
}
