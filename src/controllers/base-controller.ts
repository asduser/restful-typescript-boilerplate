import {ErrorHandler, RequiredParameterNotProvidedError, ParameterParseError} from "giuseppe/index";
import {Request, Response} from "express";
import {HttpError} from "../models/errors/http-error";

export class BaseController {

    @ErrorHandler()
    public err(req: Request, res: Response, err: Error): void {
        let msg = err['innerException'] ? err['innerException'].message : err.message;
        res.send(500, new HttpError(500, msg));
    }

    @ErrorHandler(RequiredParameterNotProvidedError, ParameterParseError)
    public badReq(request: Request, response: Response, error: RequiredParameterNotProvidedError|ParameterParseError): void {
        console.log('This is a bad request from the client.');
        response.send(400, error.message);
    }
    
}