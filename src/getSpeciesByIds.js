const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultArray = [];
  if (ids.length === 0) {
    return resultArray;
  }

  if (ids.length === 1) {
    return [data.species.find((specie) => (specie.id === ids[0]))];
  }

  return data.species.filter((specie) => ids.includes(specie.id));
}

console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b',
  'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
