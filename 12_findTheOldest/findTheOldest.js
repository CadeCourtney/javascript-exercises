const findTheOldest = function(array) {
    let oldestAge = 0, oldestPerson;
    for(let person of array) {
        let age = person["yearOfDeath"] - person["yearOfBirth"];
        // console.log(age);
        if(Number.isNaN(age)) {
            // console.log("in typeof check");
            const d = new Date();
            age = d.getFullYear() - person["yearOfBirth"];
        }
        if(oldestAge < age) {
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
