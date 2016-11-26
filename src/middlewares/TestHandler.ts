import {ErrorMiddlewareInterface, MiddlewareGlobalAfter, MiddlewareGlobalBefore, MiddlewareInterface, Middleware} from "routing-controllers";
import {Request, Response} from "express";
import {NotFoundResponse} from "../models/response/NotFoundResponse";

const fs = require("fs");

@MiddlewareGlobalAfter({priority: 1})
export class TestHandlerMiddleware {

    use(request: Request, response: Response, next?: (err?: any) => any, handlers?: any): any {
        console.log("2nd checker!");
    }

}
