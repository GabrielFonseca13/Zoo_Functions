const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayDeRetorno = [];
  if (ids.length === 0) return arrayDeRetorno;
  if (ids.length === 1) {
    for (let index = 0; index < data.species.length; index += 1){
      const specie = data.species[index];
      if (specie.id === ids[0]){
        return specie.name;
      }
    }
  }
}
console.log(specie.name);
module.exports = getSpeciesByIds;
