var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create a new object 
  var newStack = Object.create(stackMethods);
  //create counter for newStack
  newStack.counter = 0   
  //add a new temp obj container
  newStack.tempObj = {};
  //create a variable to hold last item
  newStack.last;
  //return newStack
  return newStack;
};

var stackMethods = {};
//create push method
stackMethods.push = function(value) {
  //increment counter by 1 
  this.counter++;
  //assign a value to a key value pair  
  this.tempObj[value] = value;
};  
//create a pop method
stackMethods.pop = function() {
  //create a variable to reference the last item in tempObj
  lastItem = Object.keys(this.tempObj)[Object.keys(this.tempObj).length - 1];
  //assign this.last variable to the last item in the newStack key
  this.last = lastItem;
  //delete the last item in tempObj key
  delete this.tempObj[lastItem];
  //decrease counter by 1
  this.counter--;
  //return the newStack.last
  return this.last;
};

//create size method
stackMethods.size = function() {
  //checks counter to see if less than or equal to 0, if so, return 0, else return this.counter
  if(this.counter <= 0) {
    return 0;
  } else {
    return this.counter; 
  }
};

