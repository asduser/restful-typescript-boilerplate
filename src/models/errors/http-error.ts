export class HttpError implements IHttpError {
    constructor(public httpCode: number, public message: string = "") {
    }
}

export interface IHttpError {
    httpCode: number;
}
