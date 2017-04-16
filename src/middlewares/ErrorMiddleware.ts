import {Request, Response} from "express";
import {HttpError} from "../models/errors/http-error";
import {ErrorResponse} from "../models/response/error";

export const ErrorMiddleware = (error: any, request: Request, response: Response, next?: (err?: any) => any) => {
    console.log('*** 500 ***');
    console.log(1111);
    response.send(error.httpCode, error);
};
