import {Request, Response, NextFunction} from "express";
import {NotFoundError} from "../../errors/server";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    return next(new NotFoundError());
};