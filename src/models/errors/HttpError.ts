export class HttpError extends Error {
    httpCode: number;
    message: string;
    constructor(httpCode: number, message?: string){
        super(message);
    }
}