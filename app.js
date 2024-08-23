import axios from 'axios'


axios.get('https://api.thecatapi.com/v1/images/search')
  .then(function (response) {
    console.log(response);
  })