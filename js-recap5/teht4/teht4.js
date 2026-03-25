'use strict';

const reqresApiKey = 'reqres_d1cce43727a54661a19423ec027d3933';

const reqresUrl = 'https://reqres.in/api/users';

const fetchData = async (url, options) => {
  try {
    const data = await fetch(url, options);

    if (data.status < 200 || data.status >= 300) {
      throw new Error('Virhe!');
    }

    return await data.json();
  } catch (error) {
    throw(error);
  }
};


const main = async () => {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer'
    };

    const url = 'https://reqres.in/api/users';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': reqresApiKey,
      },
      body: JSON.stringify(user)
    };

    const result = await fetchData(url, options);

    console.log('result', result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

main();


