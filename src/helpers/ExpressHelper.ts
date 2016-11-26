import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import {Request, Response} from "express";
import {HttpError} from "../models/errors/HttpError";
import {NotFoundResponse} from "../models/response/NotFoundResponse";
import {ErrorResponse} from "../models/response/ErrorResponse";
import {Application} from "express";
const compression = require("compression");
const methodOverride = require('method-override');
const errorHandler = require('express-error-handler');

export class ExpressHelper {
    
    public static bindApplicationMiddlewares(app: any, router?: any){
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

        app.use(methodOverride());
        //app.use(logErrors);
        app.use(clientErrorHandler);

        //app.use(errorHandler);
        /*app.use((request: Request, response: Response, next?: (err?: any) => any): any => {
            let notFound = new NotFoundResponse();
            response.status(200).send(notFound);
            next();
        });*/

        /*app.use((request: Request, response: Response, next?: (err?: any) => any): any => {
            let err = new HttpError(405, "Not allowed.");
            next(err);
        });*/

        /*app.use((error: any, request: Request, response: Response, next: (err?: any) => any): void => {
            let result = new ErrorResponse(error.httpCode, error.message);
            response.status(200).send(result);
            next();
        });*/

        /*var handler = errorHandler({
            handlers: {
                '405': function err500(err, req, res, next) {
                    res.status(405).send("405 - Other error.");
                    next();
                }
            }
        });*/

        function logErrors (err, req, res, next) {
            console.error(err.stack);
            next(err)
        }

        function clientErrorHandler (err, req, res, next) {
            if (req.xhr) {
                res.status(500).send({ error: 'Something failed!' })
            } else {
                next(err)
            }
        }

        /*function errorHandler (err, req, res, next) {
            res.status(500);
            res.render('error', { error: err })
        }*/


    }

    public static bindErrorMiddlewares(app){

        app.use(function(req,res,next){
            var _send = res.send;
            var sent = false;
            res.send = function(data){
                if(sent) return;
                _send.bind(res)(data);
                sent = true;
            };
            next();
        });

        /*app.use('*', (request: Request, response: Response, next?: (err?: any) => any): any => {
            let notFound = new NotFoundResponse();
            response.status(200).send(notFound);
            next();
        }, (request: Request, response: Response, next?: (err?: any) => any): any => {
            console.log("***");
            console.log(405);
            console.log(response.statusMessage);
            console.log("***");
            response.status(405).send('405');
            next();
        });*/

        /*app.use((request: Request, response: Response, next?: (err?: any) => any): any => {
            console.log("***");
            console.log(405);
            console.log("***");
            response.send('405');
            next();
        });*/

        var handler = errorHandler({
            handlers: {
                '404': function err404(err, req, res, next) {
                    //res.status(404).send("404 - Other error.");
                    next(new HttpError(404, 'Route is not found.'));
                },
                '405': function err405(err, req, res, next) {
                    //res.status(405).send("405 - Other error.");
                    next(new HttpError(405, 'Method is not allowed.'));
                }
            }
        });
        /*app.use(function (req, res, next) {
            res.status(404).send("404 - Other error.");
            next();
        });*/

        let isExist: boolean = false;
        //app.use(errorHandler.httpError(404));
        //app.use(errorHandler.httpError(405));

        // handle 404 errors
        /*app.get('*', function(req, res, next){
            next(new HttpError(404, 'Route is not found.'));
        });

        app.use('*', function (req, res, next) {
            next(new HttpError(405, 'Method is now allowed.'));
        });*/

        app.use((error: any, request: Request, response: Response, next: (err?: any) => any): void => {
            /*let result;
            if (error.message == "405") {
                result = new ErrorResponse(405, error.message);
                response.status(200).send(result);
                return;
            } else {
                result = new ErrorResponse(error.httpCode, error.message);
                response.status(200).send(result);
                return;
            }*/
            console.log('error');
            let result = new ErrorResponse(error.httpCode, error.message);
            response.status(200).send(result);
            return;
        });
    }
    
}