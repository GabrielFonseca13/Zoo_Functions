const animals = require('./getSpeciesByIds');
const data = require('../data/zoo_data');

function getEmployeesCoverage(person = { name: '', id: '' }) {
  const employee = data.employees.filter((elemento) => {
    const fullName = `${elemento.firstName} ${elemento.lastName}`;
    return fullName.includes(person.name) || elemento.id.includes(person.id);
  });
  if (employee.length === 0) {
    throw new Error('Informações inválidas');
  }
  const arrayResult = [];
  for (let index = 0; index < employee.length; index += 1) {
    arrayResult.push({ id: employee[index].id,
      fullName: `${employee[index].firstName} ${employee[index].lastName}`,
      species: animals(...employee[index].responsibleFor).map((elemento) => elemento.name),
      locations: animals(...employee[index].responsibleFor).map((elemento) => elemento.location) });
  }
  if (person.name === '' && person.id === '') {
    return arrayResult;
  }
  return arrayResult[0];
}

module.exports = getEmployeesCoverage;
