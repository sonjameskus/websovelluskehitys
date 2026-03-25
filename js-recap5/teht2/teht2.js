'use strict'

const reqresApiKey = 'reqres_d1cce43727a54661a19423ec027d3933';

const reqresUrl = "https://reqres.in/api/users";

const callApi = async () => {
  const data = await fetch(reqresUrl, {
    method: "post",
    body: JSON.stringify({name: "Sonja", job: "opiskelija"}),
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': reqresApiKey,
    },
  });

  const result = await data.json();

  console.log('data', data);
  console.log('result', result);
};

callApi();
