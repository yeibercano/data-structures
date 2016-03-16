var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // add a count variable
  var count = 0;
  //create variable to hold the last item in the object
  var last;
  // Implement the methods below
  someInstance.push = function(value){
    //add keys to storage obj
    storage[value] = value;
    //increment count - everytime we call someInstance.push, count will increase by one
    count++;
  };

  someInstance.pop = function(){
    //decrease count by 1 each time someInstance.pop is called
    count--;
    //sets last variable to last added to storage object
    last = Object.keys(storage)[Object.keys(storage).length - 1];
    //remove last item from storage
    delete storage[Object.keys(storage)[count]];
    //return last
    return last;
  };

  someInstance.size = function(){
    //if count is 0 or less, return 0, otherwise return count
    if (count <= 0) {
      return 0;
    } else {
      return count;
    };
  }
  //return someInstance
  return someInstance;
};
