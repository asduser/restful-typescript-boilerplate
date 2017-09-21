export class ObjectValidatorProvider {

    isEqual(instance1, instance2): boolean {
        const keys1 = Object.getOwnPropertyNames(instance1).toString();
        const keys2 = Object.getOwnPropertyNames(instance2).toString();
        return keys1 === keys2;
    }

}
