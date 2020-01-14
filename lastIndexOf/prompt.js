// Write a function that returns the last index that a given element is found
// Ex: lastIndexOf(4, [2,3,6,4,7,4,9]) returns 5

function lastIndexOf(target, array) {
  const index = 0;
    for(i = array.length; i > 0; i--){
    if(array[i] === target){
      return index + i
      }
    }
    return index;
  };
  
  const result = lastIndexOf(4, [2,3,6,4,7,4,9]);
  console.log(result)
