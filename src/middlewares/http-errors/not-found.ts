import {Request, Response, NextFunction} from "express";
import {NotFoundError} from "../../http";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    return next(new NotFoundError());
};
