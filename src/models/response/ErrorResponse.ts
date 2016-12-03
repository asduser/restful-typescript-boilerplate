import {BaseResponse} from "./BaseResponse";

export class ErrorResponse extends BaseResponse {
    
    constructor(status: number, message: string, errors?: string[]) {
        super(status, message, null, errors);
    }
    
}