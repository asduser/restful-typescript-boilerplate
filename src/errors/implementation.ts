export class MethodNotImplementedError extends Error {
    constructor(){
        super();
        this.name = 'ImplementationFailed';
        this.message = 'Method not implemented!';
    }
}