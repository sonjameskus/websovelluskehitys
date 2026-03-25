'use strict';

const jarjestelmanTiedot = navigator.userAgent;

let selaimenNimi = 'ei saatavilla';
let versio = 'ei saatavilla';

if (jarjestelmanTiedot.includes('Chrome')) {
  selaimenNimi = 'Chrome';
  const chromeVersio = jarjestelmanTiedot.split('Chrome/')[1];
  versio = chromeVersio.split('.')[0];
} else if (jarjestelmanTiedot.includes('Firefox')) {
  selaimenNimi = 'Firefox';
  const firefoxVersio = jarjestelmanTiedot.split('Firefox/')[1];
  versio = firefoxVersio.split('.')[0];
} else if (jarjestelmanTiedot.includes('Safari')) {
  selaimenNimi = 'Safari';
  const safariVersio = jarjestelmanTiedot.split('Safari/')[1];
  versio = safariVersio.split('.')[0];
}

let os = 'ei saatavilla';

if (jarjestelmanTiedot.includes('Windows')) {
  os = 'Windows';
} else if (jarjestelmanTiedot.includes('Mac')) {
  os = 'MacOS';
} else if (jarjestelmanTiedot.includes('Linux')) {
  os = 'Linux';
}

const date = new Date();
const dateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
};
const pvm = date.toLocaleDateString('fi-FI', dateOptions);
const kellonAika = date.toLocaleTimeString('fi-FI', timeOptions);

document.getElementById('target').innerHTML = `
<p>Selaimen nimi ja versio : ${selaimenNimi} ${versio}</p>
<p>Käyttöjärjestelmänä on: ${os}</p>
<p>Näytön leveys on: ${screen.width}</p>
<p>Näytön korkeus on: ${screen.height}</p>
<p>Selaimelle käytettävissä oleva tila, leveys: ${screen.availWidth} ja korkeus: ${screen.availHeight}</p>
<p>Päivämäärä tällä hetkellä: ${pvm}</p>
<p>Kellonaika tällä hetkellä: ${kellonAika}</p>
`;
