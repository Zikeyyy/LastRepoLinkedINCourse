const appOperations = require('../src/appOperations');

test("multiplication property of zero", () =>{
    expect(appOperations.multiply(5, 0)).toBe(0);
})

test("add property of zero", () =>{
    expect(appOperations.add(5, 10)).toBe(15);
})

test("sub property of zero", () =>{
    expect(appOperations.subtract(65, 40)).toBe(15);
})
