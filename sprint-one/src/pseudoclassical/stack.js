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
}

//create a size method
Stack.prototype.size = function() {
  //return this.counter
  return this.counter;
}