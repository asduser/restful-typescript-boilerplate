import {Request, Response} from "express";
import {RouteHelper} from "../helpers/RouteHelper";
import {HttpError} from "../models/errors/HttpError";

export const MethodNotAllowedMiddleware = (request: Request, response: Response, next?: (err?: any) => any): any => {
    let routes = RouteHelper.appRoutes;
    let isFound = routes.find((r) => r.path == request.path && r.methods.some((m) => m ==request.method));
    if (!isFound) {
        next(new HttpError(405, 'MEthod is not allowed.'));
    } else {
        next();
    }
};