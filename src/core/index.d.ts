declare module 'tnode-express/core' {

    import {Response, Request, NextFunction} from "express";

    namespace tnode {

        export interface ExpressParams {
            res: Response,
            next: NextFunction,
            req?: Request,
        }

        export interface IController {
            handle<T = any>(params: ExpressParams, promise: Promise<T>): void;
        }

    }

    export = tnode;

}
