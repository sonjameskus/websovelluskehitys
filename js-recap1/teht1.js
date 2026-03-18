'use strict';

const C = parseFloat(prompt('Anna lämpötila (°C): '));
const F = parseFloat((C * 9) / 5 + 32);
const K = parseFloat(C + 273.15);
document.querySelector('#result').innerHTML =
  'Lämpötila (' +
  C +
  '°C) Fahrenheit-asteina: ' +
  F +
  '°F ja Kelvin-asteina: ' +
  K +
  'K.';
