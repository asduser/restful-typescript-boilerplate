export class MethodNotImplementedError extends Error {
    constructor(){
        super();
        this.name = 'ImplementationFailed';
        this.message = 'Method not implemented!';
    }
}

export class EntityCollectionError extends Error {
    constructor(){
        super();
        this.name = 'EntityCollectionError';
        this.message = "Entity collection doesn't specified!";
    }
}