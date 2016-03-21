var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._container = [];
  console.log(this._container)
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._container.push([k, v]);
  // console.log(this._container);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //declare a variable result
  var result;
  //iterate through container
 _.each(this._container, function(tuple){
    //iterate throgh the tuple
    _.each(tuple, function(ele, index, tuple){
    //if the property matches  
      if(ele === k){
        //result will be the value
        result = tuple[1];
      }
    });
 });
//return result
 return result;
// this idea need some refactoring and better logic, but test pass for now.
};

HashTable.prototype.remove = function(k){
 _.each(this._container, function(tuple){
    //iterate throgh the tuple
    _.each(tuple, function(ele, index, tuple){
    //if the property matches  
      if(ele === k){
        // ele = null;
        //sets value to null
        tuple[1] = null;
      }
    });
 });
 // I feel like there is a more proper way to to this, I will come back to it
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //Constant
