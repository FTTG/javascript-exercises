const findTheOldest = function (array) {
    let oldestAge = array.reduce((age, person) => {
        if (!person.yearOfDeath) person.yearOfDeath = ((new Date).getFullYear());
        if (person.yearOfDeath - person.yearOfBirth > age) {
            return person.yearOfDeath - person.yearOfBirth;
        }
        return age;
    }, 0);
    console.log(oldestAge);
    return array.find(person => {
        return person.yearOfDeath - person.yearOfBirth == oldestAge;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
