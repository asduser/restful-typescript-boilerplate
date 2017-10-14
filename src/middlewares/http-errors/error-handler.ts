import {Request, Response, NextFunction} from "express";
import {InternalError, HttpMessage} from "../../http";

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    let error: HttpMessage = err;
    if (!err.status) {
        error = new InternalError(err);
    }
    return res.status(error.status).json(error);
};
