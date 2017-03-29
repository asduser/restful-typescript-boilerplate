import {Request, Response} from "express";
import {HttpError} from "../models/errors/HttpError";
import {ErrorResponse} from "../models/response/ErrorResponse";

export const ErrorMiddleware = (error: any, request: Request, response: Response, next?: (err?: any) => any): void => {
    console.log(error);
    console.log(error.httpCode);
    let result = new ErrorResponse(error.httpCode, error.message);
    response.status(error.httpCode).send(result);
};
