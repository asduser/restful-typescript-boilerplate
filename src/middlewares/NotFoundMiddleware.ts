import {NotFoundResponse} from "../models/response/NotFoundResponse";
import {Request, Response} from "express";

export = (request: Request, response: Response, next?: (err?: any) => any, handlers?: any): any => {
    /*console.log(request);
     if (response.statusMessage == undefined) {
     let notFound = new NotFoundResponse();
     response.status(200).send(notFound).end();
     }*/
    let notFound = new NotFoundResponse();
    response.status(200).send(notFound);
    next();
};