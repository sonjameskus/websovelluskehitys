'use strict';

let first;
let second;
let third;
first = prompt('Anna kolmion ensimmäisen sivun pituus: ');
second = prompt('Anna kolmion toisen sivun pituus: ');
third = prompt('Anna kolmion kolmannen sivun pituus: ');

if (first === second && second === third) {
  document.querySelector('#triangle').innerHTML = 'Kolmio on tasasivuinen.';
} else if (
  (first === second && first !== third) ||
  (second === third && second !== first) ||
  (first === third && first !== second)
) {
  document.querySelector('#triangle').innerHTML = 'Kolmio on tasakylkinen.';
} else {
  document.querySelector('#triangle').innerHTML = 'Kolmio on erisivuinen.';
}
