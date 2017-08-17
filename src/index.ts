import "./config/env-resolver";
import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import {config} from "./config/config";

const compression = require('compression');

import {infoRoute} from "./endpoint/info";
import {notFoundMiddleware} from "./middlewares/errors/not-found";
import {errorHandlerMiddleware} from "./middlewares/errors/error-handler";
import {crossDomainMiddleware} from "./middlewares/security/cross-domain";

const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(crossDomainMiddleware);
app.use(compression());
app.post('*', bodyParser.json());
app.put('*', bodyParser.json());

// routes
app.use('/info', infoRoute);

// error-handlers
app.use('*', notFoundMiddleware);
app.use(errorHandlerMiddleware);

// server initialization
app.listen(config.port, config.host,(data) => {
    console.log(data);
    console.log(`Express app started at ${config.port} port!`);
});
