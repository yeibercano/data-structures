var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  //create the property obj.counter to keep track of counter
  obj.counter = 0;
  //created the property to hold enqueueed objects
  obj.moreObj = {};
  //created obj.first to reference the first enqueueed item
  obj.first;
  //use _.extend to inherit the queueMethods method
  _.extend(obj, queueMethods);
  //return obj
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //counter increases everytime with each enqueue invocation
  this.counter++;
  //enqueue into obj.moreObj
  this.moreObj[value] = value;
  
};
//create dequeue method
queueMethods.dequeue = function() {
  //create a variable to reference first item in obj.more property
  var firstItem = Object.keys(this.moreObj)[0];
  //assign this.first to hold the first item in the obj.more property
  this.first = firstItem;
  //this.counter will decrement obj.counter by 1
  this.counter--;
  //delete the first item added to more.obj
  delete this.moreObj[firstItem];
  //return this.first
  return this.first;
}

//add methods to queueMethods
queueMethods.size = function() {
  //conditional statement needed to check if counter is equal to your less than 0, if so return 0, if not, return obj.counter
  if (this.counter <= 0) {
    return 0;
  } else {
    return this.counter;
  }

};
