const permutation = require('./Permutations')

describe('test permutations a', () => {
  test('add a to equal [a]', () => {
    expect(permutation.backtrack('a')).toEqual(["a"]);
  });
  
});

describe('test permutations ab', () => {
    test('add a to equal [ab,ba]', () => {
      expect(permutation.backtrack('ab')).toEqual(["ab","ba"]);
    });
    
  });

  describe('test permutations abc', () => {
    test('add a to equal [a,abc,acb,bac,bca,cab,cba]', () => {
      expect(permutation.backtrack('abc')).toEqual(['abc','acb','bac','bca','cab','cba']);
    });
    
  });

  describe('test permutations aabb', () => {
    test('add a to equal [aabb, abab, abba, baab, baba, bbaa]', () => {
      expect(permutation.backtrack('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });
    
  });


