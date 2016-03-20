var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //creates counter
  this.counter = 0;
  this.container = {};
  this.first;
};
//create a push method
Queue.prototype.enqueue = function(value){
  //increase counter by 1
  this.counter++;
  this.container[value] = value;
};
//creates a dequeue method
Queue.prototype.dequeue = function(){
  //decrease this.counter by 1
  this.counter--;
  first = Object.keys(this.container)[0];
  console.log('first', first);
  delete this.container[first];
  // return last
  return first;
};
//creates a size method
Queue.prototype.size = function(){
  if(this.counter <= 0){
    return 0;
  } else {
    return this.counter;
  }
};