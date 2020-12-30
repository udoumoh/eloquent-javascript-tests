const countBs = require('./bean_counting');


test('count Bs in string with just b\'s', () => {
    expect(countBs('They sauntered along the tree-lined boulevard')).toBeDefined();
    expect(countBs('They sauntered along the tree-lined boulevard')).toBe(0);
});


test('count Bs in an empty string', () => {
    expect(countBs('')).toBeDefined();
    expect(countBs('')).toBe(0);
});


test('count Bs in a short string', () => {
    expect(countBs('Balloons make the Bossy clown mad')).toBeDefined();
    expect(countBs('Balloons make the Bossy clown mad')).toBe(2);
});


test('count Bs in a long string', () => {
    expect(countBs('Ballons, Babies, Balance, Beauty, Brightness, Brill, Brilliance, Brilliances, Brilliant, Brilliantly, Brimming, Brio, Brisk, Briskly, Briskness, Broaden, Broadminded')).toBeDefined();
    expect(countBs('Ballons, Babies, Balance, Beauty, Brightness, Brill, Brilliance, Brilliances, Brilliant, Brilliantly, Brimming, Brio, Brisk, Briskly, Briskness, Broaden, Broadminded')).toBe(17);
});