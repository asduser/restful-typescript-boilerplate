import * as express from 'express';
import * as bodyParser from "body-parser";
import {registerControllers} from "./controllers";
import * as routes from "./endpoint";
import * as middlewares from "./middlewares";

const compression = require('compression');
const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(compression());
app.use(middlewares.onRequestFinished);
app.use(middlewares.crossDomain);
app.use(middlewares.headerGuard);
app.post('*', bodyParser.json());
app.put('*', bodyParser.json());

// routes
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);
registerControllers(app);

// error-handlers
app.use('*', middlewares.notFound);
app.use(middlewares.errorHandler);

export = app;