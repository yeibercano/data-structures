var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create a new object 
  var newStack = Object.create(stackMethods);

  newStack.counter = 0   

  //return newStack
  return newStack;
};

var stackMethods = {};
//create push method
stackMethods.push = function(value) {
  //increment counter by 1 
  this.counter++;
  //assign a value to a key value pair  
  this[value] = value;
};  
//create a pop method
stackMethods.pop = function() {

};

//create size method
stackMethods.size = function() {
  //return 0
  if(this.counter === 0) {
    return 0;
  } else {
    return this.counter; 
  }
};

