import {HttpError} from "routing-controllers/index";

export class ValidationResponseError extends HttpError {
    
    constructor(errors?: string) {
        super(400, "Validation error.");
    }
    
}