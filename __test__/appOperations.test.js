const appOperations = require('../src/appOperations');

test("multiplication property of zero", () =>{
    expect(appOpeartions(5, 0)).toBe(0);
})