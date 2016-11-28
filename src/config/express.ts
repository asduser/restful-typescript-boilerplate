import * as bodyParser from "body-parser";
import config from "./config";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
//import MongooseDB from '../core/db/mongooseDriver';
import { MongooseDB } from "../database/mongoDB/Initializer";
import { ExpressHelper } from "../helpers/ExpressHelper";

import {Request, Response} from "express";
import {HttpError} from "routing-controllers/error/http/HttpError";

export class Application {

    public static init() {
        var app = express();
        let router = express.Router();

        // Bind middlewares.
        ExpressHelper.bindApplicationMiddlewares(app, router);

        // Connect to database.
        let db : MongooseDB = new MongooseDB('mongodb://localhost:27017/express-simple-api');

        /*app.use((request: Request, res: Response, next) => {
            console.log(res.statusCode);
            next({"message": "Not found."});
        });

        app.use(function (err, request: Request, res: Response, next: Function) {
            res.send(`${err.message}`);
            next();
        });*/

        // catch 404 and forward to error handler
        /*app.use(function(request: Request, res: Response, next: Function) {
            var err = new HttpError(404, 'Not Found');
            next(err);
        });
        if (app.get('env') === 'development') {
            app.use(function(err, request: Request, res: Response, next: Function) {
                res.status(err.httpCode || err.status || 500);
                res.send({
                    message: err.message,
                    error: err
                });
            });
        }*/


        //app.use(express.static(path.join(__dirname, "../public")));

        /*
         app.use((req: express.Request, res: express.Response, next: Function): void => {
         let err: Error = new Error("Not Found");
         next(err);
         });
         */

        /*if (app.get("env") === "development") {
         app.use((err: Error, req: express.Request, res: express.Response, next): void => {
         res.status(500).render("error", {
         message: err.message,
         error: err
         });
         });
         }

         app.use((err: any, req: express.Request, res: express.Response, next): void => {
         res.status(err.status || 500).render("error", {
         message: err.message,
         error: {}
         });
         });*/

        return app;
    }

}
