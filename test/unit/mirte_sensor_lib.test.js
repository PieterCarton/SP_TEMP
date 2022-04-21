var assert = require('assert');
var sensorLib = require('../../src/mirte_sensor_lib.js');

describe("Mirte Sensor Library", function () {
  describe("#isEven(num)", function () {
    it('should return true for even numbers', function () {
      assert.equal(sensorLib.isEven(2), true);
    });
    it('should return false for odd numbers', function () {
      assert.equal(sensorLib.isEven(1), false);
    });
    it('should return false for non-numbers', function () {
      assert.equal(sensorLib.isEven("hello"), false);
    });
  });
});