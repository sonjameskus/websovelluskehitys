'use strict';

const number = parseInt(prompt('Anna positiivinen kokonaisluku: '));

if (number < 0) {
  document.querySelector('#table').innerHTML =
    'Anna positiivinen kokonaisluku: ';
} else {
  let tableHTML = '<table>';
  for (let i = 1; i <= number; i++) {
    tableHTML += '<tr>';
    for (let j = 1; j <= number; j++) {
      tableHTML += '<td>' + i * j + '</td>';
    }
    tableHTML += '</tr>';
  }
  tableHTML += '</table>';
  document.querySelector('#multiplication').innerHTML = tableHTML;
}
