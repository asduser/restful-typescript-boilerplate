import {ErrorMiddlewareInterface, MiddlewareGlobalAfter, MiddlewareGlobalBefore, MiddlewareInterface, Middleware} from "routing-controllers";
import {Request, Response} from "express";
import {NotFoundResponse} from "../models/response/NotFoundResponse";

const fs = require("fs");

@MiddlewareGlobalAfter({priority: 2})
export class NotFoundMiddleware {

    use(request: Request, response: Response, next?: (err?: any) => any, handlers?: any): any {
        /*console.log(request);
        if (response.statusMessage == undefined) {
            let notFound = new NotFoundResponse();
            response.status(200).send(notFound).end();
        }*/
        let notFound = new NotFoundResponse();
        response.status(200).send(notFound);
    }

}
