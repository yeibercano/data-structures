var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;
  //create a counter
  //list.counter = 0;
  // console.log('this is list before:', list);

list.addToTail = function(value){
    //increment counter by one, everytime addToTail is invoke
    list.counter++;
    //invoke Node and assign it to list.tail, this creates the node simultaneously and stores its value in tail
    list.tail = Node(value);
    //check if list.head is equal to null
    if (list.head === null) {
    //invoke Node and assign it to list.head, this creates the node simultaneously and stores its value in head
      list.head = list.tail;
    }
    //add the node object into the list
    list[list.counter] = list.tail;
    //assign list.tail to equal the added item
    // console.log('this is in list after addToTail:', list);
    // return list.tail;
};

list.removeHead = function(){
  list.head = list.tail;
  //decremente counter by one in every removeHead invocation
  list.counter--;
  //delete the head node from list object
  // console.log('this is key 4:', list['4'])
  delete list[list.counter];
  console.log('this is now list:', list);
  // delete Object.keys(list.head)[Object.keys(list.head)[0]];
  // console.log('list:', list); 
  return list.head.value;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
