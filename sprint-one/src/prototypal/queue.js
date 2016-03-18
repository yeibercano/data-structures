var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  //create counter for newQueue
  newQueue.counter = 0   
  //add a new temp obj container
  newQueue.tempObj = {};
  //create a variable to hold first item
  newQueue.first;
  //return newQueue
  return newQueue;
};

var queueMethods = {};


//create queue method
queueMethods.enqueue = function(value) {
  //increment counter by 1 
  this.counter++;
  //assign a value to a key value pair  
  this.tempObj[value] = value;
};  
//create a dequeue method
queueMethods.dequeue = function() {
  //assign this.first variable to the first item in the newQueue object
  this.first = Object.keys(this.tempObj)[0];
  //delete the first item from the instance of the object
  delete this.tempObj[Object.keys(this.tempObj)[0]];
  //decrease counter by 1
  this.counter--;
  //return the newQueue.first
  return this.first;
};

//create size method
queueMethods.size = function() {
  //checks counter to see if less than or equal to 0, if so, return 0, else return this.counter
  if (this.counter <= 0) {
    return 0;
  } else {
    return this.counter;
  }
};