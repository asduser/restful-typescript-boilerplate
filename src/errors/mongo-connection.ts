export class MongoConnectionError extends Error {
    constructor(message){
        super();
        this.name = 'MongoConnectionError';
        this.message = message;
    }
}
