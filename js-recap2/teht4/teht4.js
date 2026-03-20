'use strict'

function sortArray(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  return array;
}

const numbers = [9, 6, 7, 11, 3];
console.log("Alkuperäinen:", numbers);
const sortedNumbers = sortArray(numbers);
console.log("Järjestetty:", sortedNumbers);

