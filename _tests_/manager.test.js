const Manager = require('../lib/Manager');
// Testing suite for Manager class
describe('Engineer class', () => {
    // Checking whether we can create a new object off the Manager class
    it('It Instantiates an objects instance', () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe('object');
    })
    // Checking whether we are setting the Manager.number property using the constructor parameters
    it('Able to set number property using contructor parameters', () => {
        const manager = new Manager('Alex', 1234, 'alex@email.com', 1);
        expect(manager.officeNumber).toBe(1);
    })
    // Checking whether we can get Manager.number using the getNumber() method
    it('Able to get number using getNumber method', () => {
        const manager = new Manager('Alex', 1234 , 'alex@email.com', 1);
        expect(manager.getNumber()).toBe(1);
    })
    // Checking whether we can get 'Manager' using the getRole() method
    it('Able to get role using getRole method', () => {
        const manager = new Manager();
        expect(manager.getRole()).toBe('Manager');
    })
})