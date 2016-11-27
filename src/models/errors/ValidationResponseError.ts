//import {HttpError} from "routing-controllers/index";
import {HttpError} from "./HttpError";

export class ValidationResponseError extends HttpError {
    
    constructor(errors?: string) {
        super(400, "Validation error.");
    }
    
}