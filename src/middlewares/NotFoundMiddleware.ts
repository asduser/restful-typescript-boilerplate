import {Request, Response} from "express";
import {HttpError} from "../models/errors/HttpError";

export const NotFoundMiddleware = (request: Request, response: Response, next?: (err?: any) => any): any => {
    next(new HttpError(404, 'Route is not found.'));
};