const reverseString = function(str) {
    let newString = "";
    // console.log(str)
    for(var i = str.length - 1; i > -1; i--) {
        // console.log(i)
        newString += str.charAt(i);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
