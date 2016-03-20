var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //creates a counter
  this.counter = 0;
  //creates a container
  this.container = {};
  //create container for last item
  this.last;
};

//creates a size method
Stack.prototype.push = function(item){
  //increases counter by 1
  this.counter++;
  //sets item in container
  this.container[item] = item;
  // console.log(this);
};
Stack.prototype.pop = function(item){
  //decreases counter by 1
  last = Object.keys(this.container)[Object.keys(this.container).length-1];
  console.log('pop: ',last);
  this.counter--;
  console.log('last:', last);
  delete this.container[last];
  return last;
};
Stack.prototype.size = function(){
  if(this.counter <= 0){
    return 0;
  } else {
    return this.counter;
  }
};