var expect = require('chai').expect;
var footballPlayerNames = require('./index');

describe('football-player-names', function() {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(footballPlayerNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        })
      }
    });
    it('should contain "Eden Hazard"', function () {
      expect(footballPlayerNames.all).to.include('Eden Hazard');
    });
  });
  describe('random', function () {
    it('should return a random item', function () {
      var randomItem = footballPlayerNames.random();
      expect(footballPlayerNames.all).to.include(randomItem);
    });
    it('should return an array of random items if passed a numer', function () {
      var randomItems = footballPlayerNames.random(6);
      expect(randomItems).to.have.length(6);
      randomItems.forEach(function (item) {
        expect(footballPlayerNames.all).to.include(item);
      });
    });
  });
  describe('contains', function () {
    it('should return true when the array contains the search term', function () {
      var playerFromList = footballPlayerNames.all[0];
      expect(footballPlayerNames.contains(playerFromList)).to.be.true;
    });
    it('should return false when the array doesn\'t contain the search term', function () {
      expect(footballPlayerNames.contains('foobar')).to.be.false;
    });
  });
});