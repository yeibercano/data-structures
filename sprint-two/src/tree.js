var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // create property named value
  // use underscore to extend newTree with treeMethods
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
// console.log(newTree)
  return newTree;
};

  // your code here
  // newTree.children = null;  // fix me

var treeMethods = {};

treeMethods.addChild = function(value){
  // newTree.children = null;  // fix me
 // push value into newTree.children
 this.children.push({value:value});
 // reassing newTree.value to this.children[0];
  // this.value = this.children[0];
};

treeMethods.contains = function(target){
  //check on newTree.children nodes contains the target 
  return _.some(this.children, function(nodes) {
    return _.some(nodes, function(value, key, nodes) {
      return value === target;
    });
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 // Logarithm
 */
