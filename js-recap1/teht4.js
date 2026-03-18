'use strict'

let score;

score = prompt('Anna kurssista saamasi pistemäärä (0-100):');

if (score >= 0 && score <= 39) { document.querySelector('#grade').innerHTML = 'Arvosanasi on 0.'; }
else if (score >= 40 && score <= 51) { document.querySelector('#grade').innerHTML = 'Arvosanasi on 1.'; }
else if (score >= 52 && score <= 63) { document.querySelector('#grade').innerHTML = 'Arvosanasi on 2.'; }
else if (score >= 64 && score <= 75) { document.querySelector('#grade').innerHTML = 'Arvosanasi on 3.'; }
else if (score >= 76 && score <= 87) { document.querySelector('#grade').innerHTML = 'Arvosanasi on 4.'; }
else if (score >= 88 && score <= 100) { document.querySelector('#grade').innerHTML = 'Arvosanasi on 5.'; }
else { document.querySelector('#grade').innerHTML = 'Pistemäärän tulee olla välillä 0-100.'; }
