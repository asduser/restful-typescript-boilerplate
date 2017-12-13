import {Request, Response, NextFunction} from "express";
import {InternalError, HttpMessage} from "../../http";

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    let httpMessage: HttpMessage = err;
    if (!err.status) {
        httpMessage = new InternalError(err);
    }
    return res.status(httpMessage.status).json(httpMessage);
};
