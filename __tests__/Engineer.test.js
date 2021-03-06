const Engineer = require('../../lib/Engineer');

test("Create an engineer GitHub username", () => {
    const engineer = new Engineer('Bob', 1111, 'bobjones@gmail.com', 'bJones');

    expect(engineer.ghUsername).toEqual(expect.any(String));
})

test("Obtains an engineer's GitHub username", () => {
    const engineer = new Engineer('Bob', 1111, 'bobjones@gmail.com', 'bJones');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test("Obtains an engineer's role", () => {
    const engineer = new Engineer('Bob', 1111, 'bobjones@gmail.com', 'bJones');

    expect(engineer.getRole()).toEqual('Engineer');
})