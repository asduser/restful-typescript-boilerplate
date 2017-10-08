declare module '@app/controllers' {

    import {Response, Request, NextFunction} from "express";

    export interface ExpressParams {
        res: Response,
        next: NextFunction,
        req?: Request,
    }

    export interface IController {
        handle<T = any>(params: ExpressParams, promise: Promise<T>): void;
    }

}
