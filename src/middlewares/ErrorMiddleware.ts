import {Request, Response} from "express";
import {HttpError} from "../models/errors/http-error";
import {ErrorResponse} from "../models/response/error";

export const ErrorMiddleware = (error: any, request: Request, response: Response, next?: (err?: any) => any): void => {
    console.log(error);
    console.log(error.httpCode);

    const winston = require('winston');
    winston.debug('test');

    let result = new ErrorResponse(error.httpCode, error.message);
    response.status(error.httpCode).send(result);
};
