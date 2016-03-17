var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create a counter variable
  // create empty obj
  var obj = {};
  //create the property obj.counter to keep track of counter
  obj.counter = 0;
  //created the property to hold pushed objects
  obj.moreObj = {};
  //created obj.last to reference the last pushed item -- still in progress
  //use _.extend to inherit the stackMethods method
  _.extend(obj, stackMethods);
  obj.last;
  //return obj
  return obj;
};

var stackMethods = {};
//create push method
stackMethods.push = function(value) {
  //counter increases everytime with each push invocation
  this.counter = this.counter + 1;
  //push into obj.moreObj
  this.moreObj[value] = value;
  
};
//create pop method
stackMethods.pop = function() {
  //assign this.last to hold the last item in the obj.more key
  this.last = Object.keys(this.moreObj)[Object.keys(this.moreObj).length - 1];
  //this.counter will decrement obj.counter by 1
  this.counter = this.counter - 1;
  //delete the last item added to more.obj
  delete this.moreObj[Object.keys(this.moreObj)[Object.keys(this.moreObj).length - 1]];
  //return this.last
  return this.last;
}

//add methods to stackMethods
stackMethods.size = function() {
  //conditional statement needed to check if counter is equal to your less than 0, if so return 0, if not, return obj.counter
  if (this.counter <= 0) {
    return 0;
  } else {
    return this.counter;
  }

};

