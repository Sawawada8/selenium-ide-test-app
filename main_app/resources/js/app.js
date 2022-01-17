// const { default: axios } = require('axios');

// const { default: axios } = require('axios');

// require('./bootstrap');

window.axios = require('axios');

window.axios.defaults.withCredentials = true;

// window.axios.defaults.headers.common = {
// 'X-Requested-With': 'XMLHttpRequest',
// 'X-CSRF-TOKEN': window.Laravel.csrfToken,
// 'X-CSRF-TOKEN': document
//   .querySelector('meta[name="csrf-token"]')
//   .getAttribute('content'),
// };
// import React

// axios.post('/aa', { name: 'hello' }).then((data) => {
//   console.log({ data });
// });
console.log('a');
// let token = document.head.querySelector('meta[name="csrf-token"]');

axios.get('/sanctum/csrf-cookie').then((response) => {
  console.log({ response });
  axios
    .post('/login', {
      name: 'user',
      email: 'example@gmail.com',
      password: 'password',
      // _token: window.Laravel.csrfToken,
    })
    .then((data) => {
      console.log({ a: data });
    });
});
