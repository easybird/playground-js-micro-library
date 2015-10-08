var uniqueRandomArray = require('unique-random-array');
var belgianFootballPlayers = require('./belgian-football-players.json');
var getRandomItem = uniqueRandomArray(belgianFootballPlayers);

module.exports = {
  all: belgianFootballPlayers,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}