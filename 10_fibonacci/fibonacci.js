const fibonacci = function(num) {
    if(num > 0) {
    let ans = 0, prev = 1, nextTerm;
    for(var i = 1; i <= num; i++) {
        nextTerm = prev + ans;
        prev = ans;
        ans = nextTerm;
    }
    return ans;
}
else {
    return "OOPS";
}
};

// Do not edit below this line
module.exports = fibonacci;
