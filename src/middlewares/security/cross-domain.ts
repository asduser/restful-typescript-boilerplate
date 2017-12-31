import {Request, Response, NextFunction} from "express";

/**
 * Bind specific headers to work with CORS.
 * @param req {e.Request}
 * @param res {e.Response}
 * @param next {e.NextFunction}
 * @returns {Response}
 */
export const crossDomainMiddleware = (req: Request, res: Response, next: NextFunction) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();
};
