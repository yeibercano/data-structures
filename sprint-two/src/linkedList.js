var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  //create a counter
  list.counter = 0;
  // console.log('list:', list);
  console.log('list:', list);
    _.extend(list, Node());
   // add a key: list.node set it equal to Node()
   list.node = Node;
   // invoke node() in addToTail and pass the value from add to tail
   //console.log('list.node:', list.node(1));

  list.addToTail = function(value){
    // _.extend(list, Node(value));
    //invoke list.node with value
    console.log('invoked in addToTail:', list.node(value))
    //increment counter by 1 each time addToTail is invoked
    list.counter++;
    //add value to list
    // console.log('counter:', list.counter)
    list[list.counter] = value;
    //console.log('list:', list)
    //assign list.tail to equal the added item
    list.tail = list.node(value);
    // console.log('list.tail:', list.tail)
    // console.log('tail:', this.tail);
    return list.tail;
  };

  list.removeHead = function(){
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
//console.log(Node(1));

/*
 * Complexity: What is the time complexity of the above functions?
 */
