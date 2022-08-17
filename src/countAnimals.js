const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const objectAnimal = data.species.reduce((acc, currentValue) => {
      acc[currentValue.name] = currentValue.residents.length;
      return acc;
    }, {});
    return objectAnimal;
  }
  const findSpecie = data.species.find((specie) => specie.name === animal.specie);
  // console.log(findSpecie);
  const specieSex = findSpecie.residents.filter((gender) => gender.sex === animal.sex);
  // console.log(specieSex);
  if (animal.sex === undefined) {
    return findSpecie.residents.length;
  }
  return specieSex.length;
}
// console.log(countAnimals());

module.exports = countAnimals;
