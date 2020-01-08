// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

//create two variables for count and max
//loop through the array
//check if elemenet is a 1
//if yes increment the count var
//if no restart the count var



function maxConsecutiveOnes(array) {
  const count = 0;
  const last = 0;
  for(i = 0; i < array.length; i++){
       if(array[i]){
        count ++;
       } else {
         if(count > last){
           last = count;
           count = 0;
         }
       }  return Math.max(count, last);
  }
 } 
  //console.log(maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]))