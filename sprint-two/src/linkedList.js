var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  //create a counter
  //list.counter = 0;
  console.log('this is list before:', list);

list.addToTail = function(value){

    //invoke Node and assign it to list.tail, this creates the node simultaneously and stores its value in tail
    list.tail = Node(value);
    //check if list.head is equal to null
    if (list.head === null) {
    //invoke Node and assign it to list.head, this creates the node simultaneously and stores its value in head
      list.head = list.tail;
    }
    //add the node object into the list
    list[value] = list.tail;
    //assign list.tail to equal the added item
    console.log('this is in list after addToTail:', list);
    return list.tail;
};

list.removeHead = function(){
  //list.head = Node(Object.keys(this)[0])
  // console.log(list.head);
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
