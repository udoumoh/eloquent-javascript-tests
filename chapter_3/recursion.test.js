const isEven = require('./recursion');


test('Check a small even number', () => {
    expect(isEven(10)).toBeDefined();
    expect(isEven(10)).toBe(true);
});


test('Check a small odd number', () => {
    expect(isEven(9)).toBeDefined();
    expect(isEven(9)).toBe(false);
});


test('Check a large even number', () => {
    expect(isEven(1000)).toBeDefined();
    expect(isEven(1000)).toBe(true);
});


test('Check a large odd number', () => {
    expect(isEven(1001)).toBeDefined();
    expect(isEven(1001)).toBe(false);
});


test('Check minus one', () => {
    expect(isEven(-1)).toBeDefined();
    expect(isEven(-1)).toBe(false);
});


// TODO: Add test to check function recursiveness
