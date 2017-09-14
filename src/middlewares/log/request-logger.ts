import {Request, Response, NextFunction} from "express";
const debug = require('debug')('http');

export const requestLoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {

    debug(`${req.method} - ${req.url}`);

    next();
};
