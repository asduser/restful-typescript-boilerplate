import {ErrorMiddlewareInterface, MiddlewareGlobalAfter, MiddlewareInterface, Middleware} from "routing-controllers";
import {Request, Response} from "express";
import {NotFoundResponse} from "../models/response/NotFoundResponse";

const fs = require("fs");

@MiddlewareGlobalAfter({priority: 1})
export class NotFoundMiddleware {

    use(request: Request, response: Response, next?: (err?: any) => any): any {
        if (response.statusMessage == undefined) {
            let notFound = new NotFoundResponse();
            response.status(200).send(notFound).end();
        }
    }

}
