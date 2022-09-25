const removeFromArray = function(array, elements) {
    for (var i = 1; i < arguments.length; i++) {
        index = array.indexOf(arguments[i]);
        if(index > -1) {
        array.splice(index, 1);
      }
    }
      console.log(array);
      return array;
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
