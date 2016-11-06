import {BaseResponse} from "./BaseResponse";

export class SuccessResponse extends BaseResponse {
    
    constructor(data?: any, message?: string) {
        super(200, message, data);
    }
    
}