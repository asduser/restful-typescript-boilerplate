import {Request, Response, NextFunction} from "express";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    return next('Route is not found!');
};