var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};

  _.extend(someInstance,stackMethods);
  return someInstance;

};

var stackMethods = {};


stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  this.length--;
  var temp = this.storage[this.length];
  this.length = Math.max(0,this.length);
  return temp;
};

stackMethods.size = function(){
  return this.length;
};