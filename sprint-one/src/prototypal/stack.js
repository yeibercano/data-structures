var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create a new object 
  var newStack = Object.create(stackMethods);



  //return newStack
  return newStack;
};

var stackMethods = {};

//create size method
stackMethods.size = function() {
  //return 0
  return 0;
};

