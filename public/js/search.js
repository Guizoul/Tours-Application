/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

console.log('here is the search part');
export const search = async (keyword) => {
  const slug = keyword.toLowerCase().split(' ').join('-');
  try {
    showAlert('success', 'searching for tours ...');
    const res = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/tours?slug=${slug}`,
    });

    if (res.data.status === 'success') {
      showAlert('success', res.data.title);
      console.log('success woooooooolllee');
      window.setTimeout(() => {
        location.assign(`/tour/${slug}`);
      }, 1500);
    }
  } catch (err) {
    showAlert('error', `sorry!  no  results for ${keyword}`);
  }
};

search('THE SEA EXPLORER');
