const minimum = require('./minimum');


test('Check negative numbers', () => {
    expect(minimum(-2, -5)).toBeDefined();
    expect(minimum(-2, -5)).toBeTruthy();
    expect(minimum(-2, -5)).toBe(-5);
});


test('Check positive numbers', () => {
    expect(minimum(2, 5)).toBeDefined();
    expect(minimum(2, 5)).toBeTruthy();
    expect(minimum(2, 5)).toBe(2);
});


test('Check duplicate parameters', () => {
    expect(minimum(1, 1)).toBeDefined();
    expect(minimum(2, 2)).toBeTruthy();
    expect(minimum(2, 2)).toBe(2);
});