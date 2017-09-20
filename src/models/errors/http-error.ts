export interface IHttpError {
    httpCode: number;
}

export class HttpError implements IHttpError {
    constructor(public httpCode: number, public message: string = "") {
    }
}
