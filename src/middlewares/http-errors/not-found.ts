import {Request, Response, NextFunction} from "express";
import {NotFoundError} from "../../http";

/**
 * Handle if no one route was found.
 * @param req {e.Request}
 * @param res {e.Response}
 * @param next {e.NextFunction}
 * @returns {Response}
 */
export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    return next(new NotFoundError());
};
