var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // add a count variable
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value){
    //increment count - everytime we call someInstance.push, count will increase by one
    count++;
  };

  someInstance.pop = function(){
    //decrease count by 1 each time someInstance.pop is called
    count--;
  };

  someInstance.size = function(){
    //return count
    return count;
  };

  return someInstance;
};
