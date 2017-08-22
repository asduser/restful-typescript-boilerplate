import "./config/env-resolver";
import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import {config} from "./config/config";

const compression = require('compression');

const bunyan = require("express-bunyan-logger");
const bformat = require('bunyan-format');
const formatOut = bformat({ outputMode: 'short' });
const expressWinston = require('express-winston');
const winston = require('winston');

import * as routes from "./endpoint";
import * as middlewares from "./middlewares";

const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
}));
app.use(compression());
app.use(middlewares.crossDomain);
// app.use(middlewares.requestLogger);
app.use(middlewares.headerGuard);
app.post('*', bodyParser.json());
app.put('*', bodyParser.json());

// routes
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/info', routes.info);
app.use('/api/v1/users', routes.users);

// error-handlers
app.use('*', middlewares.notFound);
app.use(middlewares.errorHandler);

// server initialization
app.listen(config.port, config.host,(data) => {
    console.log(data);
    console.log(`Express app started at ${config.port} port!`);
});
