import { ErrorMiddlewareInterface, MiddlewareGlobalAfter, MiddlewareGlobalBefore } from "routing-controllers";
import {ErrorResponse} from "../models/response/ErrorResponse";

@MiddlewareGlobalAfter()
export class ErrorHandler implements ErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next: (err?: any) => any): void {
        console.log("***");
        console.log(response.statusCode);
        console.log(error.name);
        console.log(error.title);
        console.log(error.httpCode);
        console.log(error.message);
        console.log(error);
        console.log("***");
        //next(error.message);
        //response.status(200).send(error.message).end();

        let result = new ErrorResponse(error.httpCode, error.message);
        response.status(200).send(result);
    }

}
