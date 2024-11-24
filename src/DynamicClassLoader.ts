import { BaseClass } from './BaseClass';

export function createInstance(className: string, ...args: any[]): any {
    const classes: { [key: string]: any } = {
        BaseClass
    };

    const ClassToCreate = classes[className];
    if (!ClassToCreate) {
        throw new Error(`Class ${className} not found`);
    }

    return new ClassToCreate(...args);
}