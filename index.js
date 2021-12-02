// index.js
//  const { fetchMyIP } = require('./iss');
const { fetchMyIP , fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("99.235.134.18" , (error,data) => {
  console.log(error, data);
});


// fetchISSFlyOverTimes({ latitude: 43.693, longitude: -79.8365 },(error,data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned flyovertimes:' , data);
// });

