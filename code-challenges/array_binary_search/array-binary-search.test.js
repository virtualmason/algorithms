let func = require('./array-binary-search');


xdescribe('binary function', () => {
  it('return key if there', () => {
    expect(func([1,2,3,4,5,6,7,8,12], 6)).toBe(4)
    
    });
    it('return -1 if not found', () => {
      expect(func([1,2,3,4,5,6,7,8,12]), 9).toBe(-1)
      
      });
  });