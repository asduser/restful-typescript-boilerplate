import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as morganLogger from "morgan";
import {Request, Response} from "express";
import {HttpError} from "../../models/errors/http-error";
import {NotFoundResponse} from "../../models/response/not-found";
import {ErrorResponse} from "../../models/response/error";
import {Application} from "express";
import * as path from "path";
const fs = require('fs');
const compression = require("compression");
const methodOverride = require('method-override');
const errorHandler = require('express-error-handler');

import {ErrorMiddleware, NotFoundMiddleware, MethodNotAllowedMiddleware, CustomHeaders} from "../../middlewares/all";

export class ExpressHelper {
    
    public static bindApplicationMiddlewares(app: any, router?: any) {
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
        expressWinston.requestWhitelist.push('body');
        var logger = new winston.Logger({
            transports: [
                new winston.transports.File({
                    level: 'info',
                    filename: 'results.log',
                    handleExceptions: true,
                    json: true,
                    maxsize: 5242880, //5MB
                    maxFiles: 5,
                    colorize: true
                }),
                new winston.transports.Console({
                    level: 'debug',
                    handleExceptions: true,
                    json: false,
                    colorize: true
                })
            ],
            exitOnError: false
        });
        logger.stream = {
            write: function(message, encoding){
                logger.info(message);
            }
        };
        app.use(require("morgan")("combined", { "stream": logger.stream }));

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

        app.use(NotFoundMiddleware);
        app.use(MethodNotAllowedMiddleware);
        app.use(ErrorMiddleware);
    }
    
}