const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.append('language', 'en_US');
encodedParams.append('limit', '30');
encodedParams.append('location_id', '297704');
encodedParams.append('currency', 'USD');

const options = {
  method: 'POST',
  url: 'https://worldwide-restaurants.p.rapidapi.com/search',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '9c7731cd52mshbd0507658e30113p19099cjsnd09ce2435d6d',
    'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
  },
  data: encodedParams,
};

axios
  .request(options)
  // eslint-disable-next-line prefer-arrow-callback
  .then(function (response) {
    console.log(response.data);
  })
  // eslint-disable-next-line prefer-arrow-callback
  .catch(function (error) {
    console.error(error);
  });
