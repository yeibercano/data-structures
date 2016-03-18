var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a counter property to keep track of number of items pushed and pulled
  this.counter = 0;
};

// create a push method
Stack.prototype.push = function() {
  // increase counter incremently whenever push method is invoked
  this.counter++;
};

//create a pop method
Stack.prototype.pop = function() {
  // decrement counter by one whenever pop method is invoked
  this.counter--;
}

//create a size method
Stack.prototype.size = function() {
  //checks to see if this.counter is less than or equal to 0, if it is, return 0, else return this.counter
  if (this.counter <= 0) {
    return 0;
  } else {
    return this.counter;
  }
};