import "./config/env-resolver";
import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import {Server} from "./server";

import * as routes from "./endpoint";
import * as middlewares from "./middlewares";
import {winstonLogger} from "./providers/loggers/winston";
import {attachControllers} from "@decorators/express";
import {UsersController} from "./controllers/index";

const compression = require('compression');

// main
const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(winstonLogger);
app.use(compression());
app.use(middlewares.crossDomain);
app.use(middlewares.headerGuard);
app.post('*', bodyParser.json());
app.put('*', bodyParser.json());

// routes
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/info', routes.info);
app.use('/api/v1/users', routes.users);
attachControllers(app, [UsersController]);

// error-handlers
app.use('*', middlewares.notFound);
app.use(middlewares.errorHandler);

// server initialization
const server = new Server(app);

// approach when no database needed
// server.listen();

// approach when database needed
server.connectMongoDb()
    .then(() => server.listen())
    .catch((err) => console.log(err));
