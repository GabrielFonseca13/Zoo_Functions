const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitors.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      visitors.adult += 1;
    } else {
      visitors.senior += 1;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPeople = countEntrants(entrants);
  let sumEntraces = 0;
  sumEntraces += totalPeople.child * data.prices.child;
  sumEntraces += totalPeople.adult * data.prices.adult;
  sumEntraces += totalPeople.senior * data.prices.senior;
  return sumEntraces;
}
module.exports = { calculateEntry, countEntrants };
