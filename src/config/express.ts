import * as express from "express";
import { MongooseDB } from "../database/mongoDB/Initializer";
import { ExpressHelper } from "../helpers/express/express-helper";

export class Application {

    public static app;
    public static router;
    public static db;

    public static init() {
        if (!Application.app) {
            var app = express();
            let router = express.Router();

            ExpressHelper.bindApplicationMiddlewares(app, router);

            let db:MongooseDB = new MongooseDB('mongodb://localhost:27017/express-simple-api');

            //app.use(express.static(path.join(__dirname, "../public")));

            Application.app = app;
            Application.router = router;
            Application.db = db;

            return app;
        }
    }

}
