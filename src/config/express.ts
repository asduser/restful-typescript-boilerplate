import * as bodyParser from "body-parser";
import config from "./config";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
//import MongooseDB from '../core/db/mongooseDriver';
import { MongooseDB } from "../database/mongoDB/Initializer";
import { ExpressHelper } from "../helpers/express/express-helper";

import {Request, Response} from "express";
import {HttpError} from "routing-controllers/error/http/HttpError";

export class Application {

    public static app;
    public static router;
    public static db;

    public static init() {
        if (!Application.app) {
            var app = express();
            let router = express.Router();

            // Bind middlewares.
            ExpressHelper.bindApplicationMiddlewares(app, router);

            // Connect to database.
            let db:MongooseDB = new MongooseDB('mongodb://localhost:27017/express-simple-api');

            //app.use(express.static(path.join(__dirname, "../public")));

            /*if (app.get("env") === "development") {
             app.use((err: Error, req: express.Request, res: express.Response, next): void => {
             res.status(500).render("error", {
             message: err.message,
             error: err
             });
             });
             }*/

            Application.app = app;
            Application.router = router;
            Application.db = db;

            return app;
        }
    }

}
