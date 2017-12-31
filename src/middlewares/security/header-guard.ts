import {Request, Response, NextFunction} from "express";

/**
 * Bind specific headers to ensure headers guard.
 * @param req {e.Request}
 * @param res {e.Response}
 * @param next {e.NextFunction}
 * @returns {Response}
 */
export const headerGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {

    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');

    next();
};
