import "./config/env-resolver";
import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import {config} from "./config/config";

const compression = require('compression');

import * as routes from "./endpoint";
import * as middlewares from "./middlewares";

const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(compression());
app.use(middlewares.crossDomain);
app.use(middlewares.requestLogger);
app.post('*', bodyParser.json());
app.put('*', bodyParser.json());

// routes
app.use('/info', routes.info);
app.use('/users', routes.users);

// error-handlers
app.use('*', middlewares.notFound);
app.use(middlewares.errorHandler);

// server initialization
app.listen(config.port, config.host,(data) => {
    console.log(data);
    console.log(`Express app started at ${config.port} port!`);
});
