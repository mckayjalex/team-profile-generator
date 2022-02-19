const Employee = require('../lib/Employee');
// Testing suite for Employee class
describe('Employee class', () => {
    // Checking whether we can create a new object off the Employee class
    it('It Instantiates an objects instance', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    })
    // Checking whether we are setting the Employee.name property using the constructor parameters
    it('Able to set name property using contructor parameters', () => {
        const employee = new Employee('Alex', 1234, 'alex@email.com');
        expect(employee.name).toBe('Alex');
    })
    // Checking whether we are setting the Employee.id property using the constructor parameters
    it('Able to set id property using contructor parameters', () => {
        const employee = new Employee('Alex', 1234 , 'alex@email.com');
        expect(employee.id).toBe(1234);
    })
    // Checking whether we are setting the Employee.email property using the constructor parameters
    it('Able to set email property using contructor parameters', () => {
        const employee = new Employee('Alex', 1234, 'alex@email.com');
        expect(employee.email).toBe('alex@email.com');
    })
    // Checking weather we can get Employee.name using the getName() method
    it('Able to get name using getName method', () => {
        const employee = new Employee('Alex', 1234, 'alex@email.com');
        expect(employee.getName()).toBe('Alex');
    })
    // Checking weather we can get Employee.id using the getId() method
    it('Able to get id using getId method', () => {
        const employee = new Employee('Alex', 1234, 'alex@email.com');
        expect(employee.getId()).toBe(1234);
    })
    // Checking whether we can get Employee.email using the getEmail() method
    it('Able to get email using getEmail method', () => {
        const employee = new Employee('Alex', 1234, 'alex@email.com');
        expect(employee.getEmail()).toBe('alex@email.com');
    })
    // Checking whether we can get 'Employee' using the getRole() method
    it('Able to get role using getRole method', () => {
        const employee = new Employee();
        expect(employee.getRole()).toBe('Employee');
    })
})