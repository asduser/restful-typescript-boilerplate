import {Request, Response} from "express";
import {HttpError} from "../models/errors/http-error";
import {ErrorResponse} from "../models/response/error";

export const ErrorMiddleware = (error: any, request: Request, response: Response, next?: (err?: any) => any) => {
    // console.log(error);
    // console.log(error.httpCode);

    let result = new ErrorResponse(500, error.message);
    response.send(error.httpCode, error);
};
