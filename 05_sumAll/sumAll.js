const sumAll = function(a, b) {
    let sum = BigInt(0);
    let large = Math.max(a, b);
    let small = Math.min(a, b);
    if(typeof a === "number"  && typeof b === "number" && a > 0 && b > 0) {
    for(var i = small; i <= large; i++) {
        // console.log(i);
        sum = BigInt(sum) + BigInt(i);
    }
    // console.log(sum);
    if(sum < 9007199254740991) {
    return Number(sum);
    }
    else {
        return sum;
    }
}
    else {
        return "ERROR";
    }
};



// Do not edit below this line
module.exports = sumAll;
