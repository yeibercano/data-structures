var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // create a count variable
  var count = 0;
  // create a variable last to hold last item in storage
  var first;
  // Implement the methods below

  someInstance.enqueue = function(value){
    //increase count by one
    count++;
    //add item into storage
    storage[value] = value;
  };

  someInstance.dequeue = function(){
    //decrease count by 1
    count--;
    //assign the last item to the last variable in storage
    first = Object.keys(storage)[0];
    //remove last item in storage
    delete storage[Object.keys(storage)[0]];
    return first;
  };

  someInstance.size = function(){
    //check if count is equal or less than 0
    if (count <= 0) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;
};
