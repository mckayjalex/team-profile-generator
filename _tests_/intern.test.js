const Intern = require('../lib/Intern');
// Testing suite for Intern class
describe('Engineer class', () => {
    // Checking whether we can create a new object off the Intern class
    it('It Instantiates an objects instance', () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe('object');
    })
    // Checking whether we are setting the Intern.school property using the constructor parameters
    it('Able to set school property using contructor parameters', () => {
        const intern = new Intern('Alex', 1234, 'alex@email.com', 'Harvard');
        expect(intern.school).toBe('Harvard');
    })
    // Checking whether we can get Intern.school using the getSchool() method
    it('Able to get school using getSchool method', () => {
        const intern = new Intern('Alex', 1234 , 'alex@email.com', 'Harvard');
        expect(intern.getSchool()).toBe('Harvard');
    })
    // Checking whether we can get 'Intern' using the getRole() method
    it('Able to get role using getRole method', () => {
        const intern = new Intern();
        expect(intern.getRole()).toBe('Intern');
    })
})