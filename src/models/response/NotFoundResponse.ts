import {BaseResponse} from "./BaseResponse";

export class NotFoundResponse extends BaseResponse {
    
    constructor() {
        super(404, "Route is not found.");        
    }

}