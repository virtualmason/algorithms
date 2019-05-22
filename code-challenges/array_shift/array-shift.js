


// const insertShiftArray = (arr, num) => {
//   let result =0;
//   let result2 = []
//   let empty = []
//   let arr2 = [];
//   for(let i = 0; i < arr.length /2; i++) {
//     arr2[i] = arr[i]
//     result = arr2[i+1] =num;
//     arr2[i+1]
//   }
//  for (let j = Math.floor(arr.length); j > arr.length /2; j--) {
//    if(typeof result2[j-2] === 'undefined' ) {

//    } else{
//     result2[j-2] = arr[j]


//    }
//  }
//  console.log(...arr2, ...result2)
//  empty = [...arr2, ...result2];
//  return empty;
// }
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
