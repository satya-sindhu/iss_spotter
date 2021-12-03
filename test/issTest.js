const { fetchMyIP } = require('../iss');
const { assert } = require('chai');

describe('fetchMyIP', () => {
  it('returns an IP, via callback', (done) => {
    fetchMyIP((err, ip) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      // compare returned IP
      assert.equal(ip, "99.235.134.18");

      done();
    });
  });
});