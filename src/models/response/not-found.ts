import {BaseResponse} from "./base";

export class NotFoundResponse extends BaseResponse {
    
    constructor() {
        super(404, "Route doesn't exist.");
    }

}