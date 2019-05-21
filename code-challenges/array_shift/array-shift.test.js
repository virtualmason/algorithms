let array = require('./array-shift');
// console.log(test([2,4,6,8], 5))
// console.log(test([2,4,6,8], 5))
describe('SHould insert in middle', () => {
  test('It insert 5 in middle of 4 numbers', () => {
    expect(array([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
  });
});

// insertShiftArray([2,4,6,8], 5);
// insertShiftArray([2,4,6,8,10], 5);
// insertShiftArray([2,4,6,8,10,12], 5);
// insertShiftArray([2,4,6,8,10,12,14], 5);
// insertShiftArray([2,4,6,8], 5);
// insertShiftArray([2,4,6,8], 5);
