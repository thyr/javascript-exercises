const getAge = function (person) {
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (peopleArr) {
  const peopleOldestToYoungest = peopleArr.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person)
  );
  const oldestPerson = peopleOldestToYoungest[0];
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
