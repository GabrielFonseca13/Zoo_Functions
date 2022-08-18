const data = require('../data/zoo_data');

const available = (animal) => data.species.find((e) => e.name === animal).availability;

const availableHours = (day) => {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const hour = {
    [day]: {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((e) => e.availability
          .includes(day))
        .map((b) => b.name),
    },
  };
  return hour;
};

const allDays = () => Object.keys(data.hours).reduce((acc, currentValue) => {
  Object.assign(acc, availableHours(currentValue));
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  const verify = Object.keys(data.hours);
  const verifyAnimal = data.species.some((animal) => animal.name === scheduleTarget);

  if (verify.includes(scheduleTarget)) {
    return availableHours(scheduleTarget);
  }
  if (scheduleTarget === undefined) {
    return allDays();
  }
  if (!verifyAnimal) {
    return allDays();
  }
  return available(scheduleTarget);
}

module.exports = getSchedule;
