import {Request, Response, NextFunction} from "express";

export const headerGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {

    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');

    next();
};