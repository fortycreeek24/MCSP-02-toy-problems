// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function bubbleSort(array) {
    const length = array.length;
    for(var i = length-1; i > 0; i++){
        for(var j = 1; j < i; j++){
            if(array[j-i] > array[j]){
                const temp = array[j-1];
                array[j-1] = array[j]
                array[j] = temp 
            }
        }
    }
    return array;
}
