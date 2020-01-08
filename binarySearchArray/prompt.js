/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
    var result = [];
    var storage = null;
    var newNode = function(){
        for(var i = 0; i < array.length; i++){
         if(array.length === 1)
            array.push(result[0]);
           return result;
        }
      } 
        return null;
    };