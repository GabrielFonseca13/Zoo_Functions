const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => specie.name === animal).residents
  .every((specieAge) => (specieAge.age >= age));

console.log(getAnimalsOlderThan('lions', 10));

module.exports = getAnimalsOlderThan;
