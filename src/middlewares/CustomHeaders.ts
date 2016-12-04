/*
import {Middleware, MiddlewareInterface, MiddlewareGlobalAfter} from "routing-controllers";

@Middleware()
export class CustomHeaders implements MiddlewareInterface {

    use(request: any, response: any, next?: (err?: any) => any): any {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('X-Type', '202');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        response.removeHeader("X-Powered-By");
        next();
    }

}*/

import {Request, Response} from "express";

export const CustomHeaders = (request: Request, response: Response, next: (err?: any) => any): void => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    response.removeHeader("X-Powered-By");
    return next();
};
