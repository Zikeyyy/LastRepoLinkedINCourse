const appOperations = require('../src/appOperations');

test("multiplication property of two nums", () =>{
    expect(appOperations.multiply(5, 0)).toBe(0);
})

test("add property of two nums", () =>{
    expect(appOperations.add(5, 10)).toBe(15);
})


test("sub property of two nums", () =>{
    expect(appOperations.subtract(55, 40)).toBe(15);
})

test("devide property of two nums", () =>{
    expect(appOperations.devide(165, 11)).toBe(15);
})

