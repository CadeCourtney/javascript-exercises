const palindromes = function (str) {
    let revStr = str.split('').reverse().join('').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    if(str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"") == revStr) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
