'use strict';

const reqresApiKey = 'reqres_d1cce43727a54661a19423ec027d3933';

const reqresUrl = 'https://reqres.in/api/unknown/23';

const callApi = async () => {
  try {
    const data = await fetch(reqresUrl, {
      headers: {
        'x-api-key': reqresApiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Virhe! Status: ${response.status}`);
    }

    const result = await response.json();

    console.log('data', result);
  } catch (error) {
    console.log('Eipä toimi!', error.message);
  }
};

callApi();
