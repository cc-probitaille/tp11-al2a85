import { createInstance } from '../DynamicClassLoader';

describe('Dynamic Class Loader', () => {
    it('should create an instance of BaseClass', () => {
        const instance = createInstance('BaseClass', 'Jane Doe');
        expect(instance.greet()).toBe('Hello, Jane Doe!');
    });

    it('should throw an error for unknown class', () => {
        expect(() => createInstance('UnknownClass')).toThrow('Class UnknownClass not found');
    });
});