var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a counter property to keep track of when items are pushed
  this.counter = 0;
  // create a property to hold all queued items
  this.moreObj = {};
  // create a variable to hold the first item in moreObj;
  this.first;
};

// create an enqueue method
Queue.prototype.enqueue = function(value) {
  // increment count by 1 each time push method is called
  this.counter++;
  // add the item to moreobj;
  this.moreObj[value] = value;
};

// create a dequeue method
Queue.prototype.dequeue = function() {
  // decrements the counter by 1 each time dequeue is called
  this.counter--;
  // create a variable to reference the first item in moreObj
  var firstItem = Object.keys(this.moreObj)[0];
  // assign this.first to the first item in moreObj
  this.first = firstItem;
  // remove the first item in the moreObj property
  delete this.moreObj[firstItem];
  // return the first item;
  return this.first;
};

// create a size method
Queue.prototype.size = function() {
  // checks to see if this.counter is less than or equal to 0, if so, then return 0, else return this.counter
  if (this.counter <= 0) {
    return 0;
  } else {
    return this.counter;
  };
};
