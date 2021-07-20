const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

// Demo API Endpoint: https://reqres.in/api/users
// Data to send to API: {"name": "morpheus", "job": "leader"}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
