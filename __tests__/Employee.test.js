
const Employee = require('../../lib/Employee');

test("Create's an Employee Object", () => {
    const employee = new Employee('Bob', 1111, 'bobjones@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Obtains the employee's name", () => {
    const employee = new Employee('Bob', 1111, 'bobjones@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test("Obtains the employee's ID", () => {
    const employee = new Employee('Bob', 1111, 'bobjones@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("Obtains the employee's Email", () => {
    const employee = new Employee('Bob', 1111, 'bobjones@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test("Obtains the employee's Role", () => {
    const employee = new Employee('Bob', 1111, 'bobjones@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})