import {Request, Response} from "express";
import {HttpError} from "../models/errors/HttpError";
import {RouteHelper, AppRoute} from "../helpers/RouteHelper";

export const NotFoundMiddleware = (request: Request, response: Response, next?: (err?: any) => any): any => {
    let methodFound = RouteHelper.appRoutes.find((route: AppRoute) => {
        return route.path == request.url;
    });
    if (!methodFound) {
        next(new HttpError(404, 'Route is not found.'));
    } else {
        next();
    }
};