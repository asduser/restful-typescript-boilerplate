import {Request, Response, NextFunction} from "express";

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.json(err);
};