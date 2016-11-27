import {IHttpError} from "./IHttpError";

export class HttpError implements IHttpError {
    constructor(public httpCode: number, public message: string = ""){
    }
}