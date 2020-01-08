/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function(arr) {
  var onlyEven = 0;
  var notEven = null;
  for(var i = 0; i < arr.length; i++){
    for(var o = 0; o < arr.length; o++){
    if(arr[i] === arr[o]){
      count++;
    }
}
if(onlyEven % 2 === 0){
  return arr[i];
}
count = 0;
  }
  return result;
};

