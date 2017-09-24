export class ObjectValidatorProvider {

    hasIdenticalKeys(source, target): boolean {
        const keys1 = Object.getOwnPropertyNames(source).toString();
        const keys2 = Object.getOwnPropertyNames(target).toString();
        return keys1 === keys2;
    }

}
