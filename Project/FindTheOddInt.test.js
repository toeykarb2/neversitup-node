const OddInt = require('./FindTheOddInt')

describe('find the odd int [7]', () => {
  test('add a to equal [7]', () => {
    expect(OddInt.findTheOddInt([7])).toEqual(7);
  });
  
});

describe('find the odd int [0]', () => {
    test('add a to equal [0]', () => {
      expect(OddInt.findTheOddInt([0])).toEqual(0);
    });
    
});

describe('find the odd int [1,1,2]', () => {
    test('add a to equal [1,1,2]', () => {
      expect(OddInt.findTheOddInt([1,1,2])).toEqual(2);
    });
    
});

describe('find the odd int [0,1,0,1,0]', () => {
    test('add a to equal [0,1,0,1,0]', () => {
      expect(OddInt.findTheOddInt([0,1,0,1,0])).toEqual(0);
    });
    
});

describe('find the odd int [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
    test('add a to equal [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
      expect(OddInt.findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4);
    });
    
});


