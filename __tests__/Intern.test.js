
const Intern = require('../../lib/Intern');

test("Creates an intern's school name", () => {
    const intern = new Intern('Bob', 1111, 'bobjones@gmail.com', 'Cool School');

    expect(intern.school).toEqual(expect.any(String));
})

test("Obtains the intern's school name", () => {
    const intern = new Intern('Bob', 1111, 'bobjones@gmail.com', 'Cool School');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("Obtains the intern's role", () => {
    const intern = new Intern('Bob', 1111, 'bobjones@gmail.com', 'Cool School');

    expect(intern.getRole()).toEqual('Intern');
})