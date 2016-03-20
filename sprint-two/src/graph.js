

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  //created container to store addedNode
  this.allNodes = {};
  //creating a container to store allEdges
  this.allEdges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  //when invoked a node will be created in this.allNodes
  this.allNodes[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  // console.log('...alNodes:',this.allNodes);
  //check if node is in this.allNodes, if so returns true
  return _.contains(this.allNodes, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //delete any node that has been passed into removeNode
  delete this.allNodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  //create variable to hold target
  var target = [fromNode, toNode];
  console.log('target:', target);
  console.log('allEdges:', this.allEdges);
  return _.contains(this.allEdges,fromNode+toNode)
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //when invoked will crate new edges and stores in allEdges
  this.allEdges[fromNode + ', ' + toNode] = fromNode + ', ' + toNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

  // if (this.allEdges[fromNode+toNode] === fromNode+toNode) {
    console.log('it does!');
  // }
  // Remove addded edge 
  // delete this.allEdges[fromNode + ',' + toNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  //iterate with each
  //pass in a cb that will be executed on each node
  _.each(this.allNodes, function(node) {
    cb();
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



