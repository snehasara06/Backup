const axios = require('axios');

axios
  .get('https://jsonplaceholder.typicode.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });
