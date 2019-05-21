'use strict';
const reverseArray =(arr)=> {
  for (var i = 0; i <= (arr.length - 1) / 2; i++) {
    console.log(i)
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
       console.log(arr)
  }
  return arr;
}

reverseArray([2,3,5,6,8,12,19])

// /* ------------------------------------------------------------------------------------------------
// TESTS

// All the code below will verify that your functions are working to solve the challenges.

// DO NOT CHANGE any of the below code.

// Run your tests from the console: jest challenges-01.test.js

// ------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the message with all uppercase characters', () => {
    expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
  });
});
