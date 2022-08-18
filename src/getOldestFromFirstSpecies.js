const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const specieId = findEmployee.responsibleFor[0];
  const specie = data.species.find((especie) => especie.id === specieId);
  const oldestAnimal = specie.residents.reduce((acc, currentValue) => {
    if (currentValue.age > acc.age) {
      return currentValue;
    }
    return acc;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
