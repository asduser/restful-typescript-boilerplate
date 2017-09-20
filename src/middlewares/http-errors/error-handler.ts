import {Request, Response, NextFunction} from "express";
import {InternalError} from "../../http";

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const error = new InternalError({
        status: err.status,
        message: err.message,
        title: err.title
    });
    return res.status(err.status || 500).json(error);
};
