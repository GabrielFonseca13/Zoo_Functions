const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((element) => element.managers
      .includes(managerId))
      .map((employeeName) => `${employeeName.firstName} ${employeeName.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
