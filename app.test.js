
const add = require('./app');

test('adds two numbers', () => {
    expect(add(10, 20)).toBe(30);
});
