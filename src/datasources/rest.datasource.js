'use strict';

const axios = require('axios');



module.exports = {
  get(url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((response) => resolve(response))
      .catch((error) => {
        if (error.response.status == 404) {
          resolve(error.response)
        } else {
          reject(error);
        }
      })
    });
  }
}

