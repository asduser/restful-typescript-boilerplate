import {Request, Response} from "express";
import {HttpError} from "../models/errors/http-error";
import {RouteHelper, AppRoute} from "../helpers/route/route-helper";

export const NotFoundMiddleware = (request: Request, response: Response, next?: (err?: any) => any) => {
    let methodFound = RouteHelper.appRoutes.find((route: AppRoute) => {
        return route.path == request.url;
    });
    if (!methodFound) {
        next(new HttpError(404, 'Route is not found.'));
    } else {
        console.log('*** 404 - ok ***');
        console.log(request.url);
        next();
    }
};