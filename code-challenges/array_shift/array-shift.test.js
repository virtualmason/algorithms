let array = require('./array-shift');

describe('Should insert in middle', () => {
  it('It insert 5 in middle of 4 numbers', () => {
    expect(array([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
  });
});
// describe('Should insert in middle', () => {
//   it('It insert 5 in middle of 6 numbers', () => {
//     expect(array([2,4,6,8,10,12], 5)).toStrictEqual([2,4,6,5,8,10,12]);
//   });
// });
// insertShiftArray([2,4,6,8], 5);
// insertShiftArray([2,4,6,8,10], 5);
// insertShiftArray([2,4,6,8,10,12], 5);
// insertShiftArray([2,4,6,8,10,12,14], 5);
// insertShiftArray([2,4,6,8], 5);
// insertShiftArray([2,4,6,8], 5);
