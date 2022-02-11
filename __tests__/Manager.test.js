const Manager = require('../../lib/Manager');

test("Create a Manager's office number", () => {
    const manager = new Manager('Bob', 1111, 'bobjones@gmail.com', 11);

    expect(manager.officeNum).toEqual(expect.any(Number));
})

test("Obtains the Manager's office number", () => {
    const manager = new Manager('Bob', 1111, 'bobjones@gmail.com', 11);

    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
})

test("Obtains the Manager's role", () => {
    role = 'Manager'
    const manager = new Manager('Bob', 1111, 'bobjones@gmail.com', 11);

    expect(manager.getRole()).toEqual('Manager');
})