const appOperations = require('../src/appOperations');

test("multiplication property of zero", () =>{
    expect(appOperations.multiply(5, 0)).toBe(0);
})

test("multiplication property of zero", () =>{
    expect(appOperations.subtract(25, 10)).toBe(15);
})
