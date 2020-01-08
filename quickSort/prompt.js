/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
    //create and if statement for array length <= 1
        if (array.length <= 1) {
            return array;
        }
    //create a pivot var
        var pivot = array[0];
        //create a lesser and greater var and set them to empty arrays
        var lesser = [];
        var greater = [];
    //iterate through array 
        for (var i = 1; i < array.length; i++) {
    //if the element is less than pivot push into lesser array 
    //if the element is larger than pivot push into greater array
            array[i] < pivot ? lesser.push(array[i]) : greater.push(array[i]);
        }
    //concat quicksort lesser and quicksort greater
        return quicksort(lesser).concat(pivot, quicksort(greater));
    };
    
    //console log it to test the code is working
    var sort = quicksort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 15 ,79, 43, 12, 98]);
    
    console.log(sort)
    