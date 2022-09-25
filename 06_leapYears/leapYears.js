const leapYears = function(year) {
    switch(true) {
        case year % 4 == 0 && year % 100 != 0:
            return true;
        case year % 4 == 0 && year % 100 == 0 && year % 400 == 0:
            return true;
        default:
            return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
