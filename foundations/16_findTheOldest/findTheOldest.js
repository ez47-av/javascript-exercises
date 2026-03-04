// reduce the array to a single returned object
// tracked = the oldest person currently. Accumulator sets itself to array[0] since unspecified
// if the person doesn't have a date of death, set it to the current year
// if the current person is older than the tracked person, than they become the new tracked

const findTheOldest = function(array) {
  return array.reduce((tracked, current) => {
    let trackedAge
    let currentAge;

    if (!tracked.yearOfDeath) {
      trackedAge = new Date().getFullYear() - tracked.yearOfBirth;
    } else {
      trackedAge = tracked.yearOfDeath - tracked.yearOfBirth;
    }

    if (!current.yearOfDeath) {
      currentAge = new Date().getFullYear() - current.yearOfBirth;
    } else {
      currentAge = current.yearOfDeath - current.yearOfBirth;
    }

    return trackedAge > currentAge ? tracked : current;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
