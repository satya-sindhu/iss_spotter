// index.js
const { fetchMyIP } = require('./iss');

// The code below is temporary and can be commented out.


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});