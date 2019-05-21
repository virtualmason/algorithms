
// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
// Example
// Input	Output
// [2,4,6,8], 5	[2,4,5,6,8]
// [4,8,15,23,42], 16	[4,8,15,16,23,42]
// Stretch Goal
// Once you’ve achieved a working solution, write a second function that removes an element from the middle index and shifts other elements in the array to fill the new gap.

const insertShiftArray = (arr, num) => {
  let result =0;
  let result2 = []
  let empty = []
  let arr2 = [];
  for(let i = 0; i < arr.length /2; i++) {
    arr2[i] = arr[i]
    result = arr2[i+1] =num;
    arr2[i+1]
    
  }
 for (let j = arr.length/2+1; j > 0; j--) {
    result2[j-2] = arr[j]
 }
 empty = [...arr2, ...result2];
 return empty;
}
module.exports = insertShiftArray;

