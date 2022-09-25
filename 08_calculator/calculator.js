const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(var i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let product = 1;
	for(var i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
