import {Request, Response, NextFunction} from "express";
import {InternalError, HttpMessage} from "../../http";

/**
 * Handle different errors: server, request, thrown etc.
 * @param err {any}
 * @param req {e.Request}
 * @param res {e.Response}
 * @param next {e.NextFunction}
 * @returns {Response}
 */
export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    let httpMessage: HttpMessage;
    if (err instanceof HttpMessage) {
        httpMessage = err;
    } else {
        httpMessage = new InternalError(err);
    }
    return res.status(httpMessage.status).json(httpMessage);
};
