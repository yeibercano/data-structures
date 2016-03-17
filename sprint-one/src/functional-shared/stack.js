var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create a counter variable
  // create empty obj
  var obj = {};
  //add new methods to obj 
  obj.counter = 0;
  obj.moreObj = {};
  obj.last = 'hi';
  _.extend(obj, stackMethods);
  // console.log('counter inside stack:', counter)
  // console.log('obj inside stack:', obj);
  console.log('obj:', obj);
  //return obj
  return obj;
};

var stackMethods = {};
//create push method
stackMethods.push = function(value) {
  console.log('push was invoked')
  //counter increases everytime with each push invocation
  this.counter = this.counter + 1;
  console.log('this is value:', value);
  //push into obj
  this.moreObj.value = value;
  console.log('this is after push:', this.moreObj)
  console.log('this is last:', this.last);
  
};
//create pop method
stackMethods.pop = function() {
  console.log('pop is in here');

  this.counter = this.counter - 1;
}

//add methods to stackMethods
stackMethods.size = function() {
  console.log('size was invoked');
  //stack method size returns counter
  if (this.counter <= 0) {
    return 0;
  } else {
    return this.counter;
  }

};

//counter decreases everytime with each pop invocation
