const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Instantiating an Employee', () => {
        it('Can properly be instantiated', () => {
            const Austin = new Employee()
            expect(typeof(Austin)).toBe("object")
        })
    })

    describe('Can set constructor properties', () => {
        it('Can set the name', () => {
            const name = 'Austin';
            const newEmployee = new Employee(name)
            expect(newEmployee.name).toBe(name);
        })

        it('Can set the ID', () => {
            const testID = 1;
            const newEmployee = new Employee('Austin', testID)
            expect(newEmployee.id).toBe(testID)
        })
    })
});