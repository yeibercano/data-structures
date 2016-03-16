var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // add a count variable
  var count = 0;
  //create variable to store keys an empty object

  var allKeys = {};

  // acces the last key added
  var last = Object.keys(allKeys)[Object.keys(allKeys).length - 1];


  // Implement the methods below
  someInstance.push = function(value){
    //add keys to allKeys obj
    allKeys[value] = value;
    console.log('allKeys inside push:', allKeys)
    //increment count - everytime we call someInstance.push, count will increase by one
    count++;
  };

  someInstance.pop = function(){
    //decrease count by 1 each time someInstance.pop is called
    count--;
    //remove last item 
    delete allKeys.a;
    //return last item
    console.log('all Kesy inside pop:', allKeys)
  };

  someInstance.size = function(){
    //if count is 0 return 0 otherwise return count
    if (count <= 0) {
      return 0;
    } else {
      return count
    };
  }

  return someInstance;
};
