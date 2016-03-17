var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create empty obj
  var obj = {};
  //add new methods to obj 
  _.extend(obj, stackMethods);

  //return obj
  return obj
};

var stackMethods = {};
//add methods to stackMethods
stackMethods.size = function() {

  return 0;

};

