import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import {Request, Response} from "express";
import {HttpError} from "routing-controllers/error/http/HttpError";
const compression = require("compression");

export class ExpressHelper {
    
    public static bindApplicationMiddlewares(app: any){
        app.use(logger("dev"));
        app.use(bodyParser.text());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());

        app.set('etag', false);
        /*app.use(function(request: Request, res: Response, next: Function) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('X-Type', '101');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
            res.removeHeader("X-Powered-By");
            next();
        });*/

        // catch 404 and forward to error handler
        /*app.use((req, res, next) => {
            console.log("***");
            console.log(res.statusCode);
            console.log("***");
            let err = new HttpError(404, 'Not Found');
            next(err);
        });*/

        /*app.use((request: Request, res: Response, next) => {
            let errorModel = new ResponseModel(false, {}, "", "Not found the route.");
            next(errorModel);
        });*/

        /*app.use(function (err, request: Request, res: Response, next: Function) {
            /!*if (err) {
                res.send(`${err.status} | ${err.message}`);
            } else {
                res.status(500).send("Internal server error.");
            }*!/
            res.send(`${err.message}`);
            next();
        });*/

        /*app.use(function (err, request: Request, res: Response, next: Function) {
            res.send(`${err.message}`);
            next();
        });*/

        //app.use(compression({level: 9}));

        /*app.use((req, res, next) => {
            res.status(404);
            res.send('ERROR 404: Not Found');
            next();
        });*/
        /*app.get('/!*', function(req, res, next) {
            next('route'); // ERROR 404: Not Found
        });*/
    }
    
}