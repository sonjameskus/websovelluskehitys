'use strict';

let x1;
let y1;
x1 = prompt('Anna aloituspisteen x-koordinaatti');
y1 = prompt('Anna aloituspisteen y-koordinaatti');
let x2;
let y2;
x2 = prompt('Anna loppupisteen x-koordinaatti');
y2 = prompt('Anna loppupisteen y-koordinaatti');

let Distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector('#distance').innerHTML =
  'Pisteiden välinen etäisyys: ' + Distance;
