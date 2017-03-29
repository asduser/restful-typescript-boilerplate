import {Request, Response} from "express";

export const CustomHeaders = (request: Request, response: Response, next: (err?: any) => any): void => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    response.removeHeader("X-Powered-By");
    return next();
};
