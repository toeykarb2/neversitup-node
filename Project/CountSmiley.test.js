const CountSmiley = require('./CountSmiley')

describe('find the perfect smileys eyes can be marked as : or ; and valid characters for a nose are - or ~ every smiling face must have a smiling mouth that should be marked with either ) or D', () => {
test.each([
    { data: [':)', ';(', ';}', ':-D'], ans: 2 },
    { data: [';D', ':-(', ':-)', ';~)'], ans: 3 },
    { data: [';]', ':[', ';*', ':$', ';-D'], ans: 1 },
    { data: [';]', ':[', ';*', ':$', ';-$'], ans: 0 },
    { data: [], ans: 0 }
  ])(`countSmileys($data) should return $ans`, ({ data, ans }) => {

    const result = CountSmiley.CountSmiley(data);

    expect(result).toBe(ans);
  })

  test('test if data not match any condition', () => {
    const item =  [':dssssd']
    const consoleSpy = jest.spyOn(global.console, 'log')
    CountSmiley.CountSmiley(item);
    expect(consoleSpy).toHaveBeenCalledWith('Not match any condition')
  });
  
});


