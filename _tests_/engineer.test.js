const Engineer = require('../lib/Engineer');
// Testing suite for Engineer class
describe('Engineer class', () => {
    // Checking whether we can create a new object off the Engineer class
    it('It Instantiates an objects instance', () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe('object');
    })
    // Checking whether we are setting the Engineer.github property using the constructor parameters
    it('Able to set github property using contructor parameters', () => {
        const engineer = new Engineer('Alex', 1234, 'alex@email.com', 'mckayalex');
        expect(engineer.github).toBe('mckayalex');
    })
    // Checking whether we can get Engineer.github using the getGithub() method
    it('Able to get github using getGithub method', () => {
        const engineer = new Engineer('Alex', 1234 , 'alex@email.com', 'mckayalex');
        expect(engineer.getGithub()).toBe('mckayalex');
    })
    // Checking whether we can get 'Engineer' using the getRole() method
    it('Able to get role using getRole method', () => {
        const engineer = new Engineer();
        expect(engineer.getRole()).toBe('Engineer');
    })
})