import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as morganLogger from "morgan";
import {Request, Response} from "express";
import {HttpError} from "../models/errors/HttpError";
import {NotFoundResponse} from "../models/response/NotFoundResponse";
import {ErrorResponse} from "../models/response/ErrorResponse";
import {Application} from "express";
import * as path from "path";
const fs = require('fs');
const compression = require("compression");
const methodOverride = require('method-override');
const errorHandler = require('express-error-handler');

import {ErrorMiddleware, NotFoundMiddleware, MethodNotAllowedMiddleware, CustomHeaders} from "../middlewares/all";

export class ExpressHelper {
    
    public static bindApplicationMiddlewares(app: any, router?: any){
        //var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'));
        //app.use(morganLogger("combined", {stream: accessLogStream}));

        //app.use(morganLogger("dev"));

        //app.use(bodyParser.text());
        //app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(bodyParser.text());
        app.use(cookieParser());
        app.use(CustomHeaders);
        app.use(methodOverride());
        app.set('etag', false);

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

        const winston = require('winston');
        const expressWinston = require('express-winston');
        // express-winston logger makes sense BEFORE the router.
        app.use(expressWinston.logger({
            transports: [
                new winston.transports.Console({
                    json: false,
                    colorize: true
                }),
                new (winston.transports.File)({
                    filename: `results.log`,
                    timestamp: new Date().toLocaleTimeString(),
                    level: process.env.NODE_ENV || 'development' === 'development' ? 'debug' : 'info'
                })
            ]
        }));
        app.use(router);
        app.use(expressWinston.errorLogger({
            transports: [
                new winston.transports.Console({
                    json: false,
                    colorize: true
                }),
                new (winston.transports.File)({
                    filename: `results.log`,
                    timestamp: new Date().toLocaleTimeString(),
                    level: process.env.NODE_ENV || 'development' === 'development' ? 'debug' : 'info'
                })
            ]
        }));

    }

    public static bindCommonRequestMiddlewares(app){

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

        app.use(MethodNotAllowedMiddleware);
        app.use(NotFoundMiddleware);
        app.use(ErrorMiddleware);
    }
    
}