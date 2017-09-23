import {Request, Response, NextFunction} from "express";

export const getAppInfo = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        ver: '1.0',
        type: 'REST Api',
        status: 'live'
    });
};
