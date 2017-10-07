import {Request, Response, NextFunction} from "express";
import {InternalError} from "../../http";

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const error = new InternalError(err);
    return res.status(error.status || 500).json(error);
};
