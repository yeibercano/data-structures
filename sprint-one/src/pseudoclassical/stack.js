var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a counter property to keep track of number of items pushed and pulled
  this.counter = 0;
  //create a property to hold the new objects being pushed in
  this.moreObj = {};
  //create a property to reference the last item in moreObj property
  this.last;
};

// create a push method
Stack.prototype.push = function(value) {
  // increase counter incremently whenever push method is invoked
  this.counter++;
  // add the new key value pair to moreObj property
  this.moreObj[value] = value;
};

//create a pop method
Stack.prototype.pop = function() {
  // decrement counter by one whenever pop method is invoked
  this.counter--;
  //assign variable to reference the last item in moreObj property
  var lastItem = Object.keys(this.moreObj)[Object.keys(this.moreObj).length - 1]
  // assign this.last to the last item in moreObj property 
  this.last = lastItem;
  //remove the last item in moreObj;
  delete this.moreObj[lastItem];
  //return this.last
  return this.last;
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