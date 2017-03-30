import {Request, Response} from "express";
import {RouteHelper, AppRoute} from "../helpers/route/route-helper";
import {HttpError} from "../models/errors/http-error";

export const MethodNotAllowedMiddleware = (request: Request, response: Response, next?: (err?: any) => any): any => {
    let routes = RouteHelper.appRoutes;
    let isFound = routes.find((r: AppRoute) => r.path == request.path && r.methods.some((m) => m == request.method));
    if (!isFound) {
        next(new HttpError(405, 'Method is not allowed.'));
    } else {
        next();
    }
};