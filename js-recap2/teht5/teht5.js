'use strict';

const asc = 'asc';
const desc = 'desc';

function sortArray(numbers, order) {
  if (order === 'asc') {
    numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    numbers.sort(function (a, b) {
      return b - a;
    });
  }
  return numbers;
}

const numbers = [9, 6, 7, 11, 3];
console.log('Alkuperäinen:', numbers);
console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));

const numbers2 = [5, 2, 8, 9, 66];
console.log('Alkuperäinen:', numbers2);
console.log(sortArray(numbers2, 'asc'));
console.log(sortArray(numbers2, 'desc'));
