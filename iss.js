// iss.js
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const request = require('request');

const fetchMyIP = function(callback) { 

// use request to fetch IP address from JSON API
  const url = 'https://api.ipify.org?format=json';
  request(url , (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      // if non-200 status, assume server error
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
      const ip = JSON.parse(body);
      //callback(null,ip.ip);
      fetchCoordsByIP(ip.ip, callback);
    }
  });
};

const fetchCoordsByIP = function(ip, callback) {

  const url = `https://api.freegeoip.app/json/${ip}?apikey=6ac08040-3de2-11ec-81b5-2339b660aaa4`;
  request(url , (error, response, body) => {
if (error) {
callback(error,null);
} else {
 // if non-200 status, assume server error
if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
}
const {latitude , longitude} = JSON.parse(body);
 //callback(null,{latitude : res.latitude, longitude : res.longitude});
fetchISSFlyOverTimes({latitude , longitude}, callback);
  }
 });
};


const fetchISSFlyOverTimes = function(coords, callback) {
    // ...
    const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  
    request(url , (error, res, body) => {
      if (error) {
        callback(error,null);
      } else {
        // if non-200 status, assume server error
        if (res.statusCode !== 200) {
          const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
          callback(Error(msg), null);
          return;
        }
        const {response} = JSON.parse(body);
        //console.log(body);
        callback(null,response);
      }
    });
  };

  const nextISSTimesForMyLocation = function(callback) {
    fetchMyIP(callback);
  };
  
  
//module.exports = { fetchMyIP, fetchCoordsByIP };
//module.exports = { fetchMyIP};
//module.exports = { fetchISSFlyOverTimes};
module.exports = { fetchMyIP };