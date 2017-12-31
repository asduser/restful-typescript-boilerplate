import "./config/init";
import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import {config} from "./config/config";
import {registerControllers} from "./controllers";
import { Server } from "./server";
import * as routes from "./endpoint";
import * as middlewares from "./middlewares";
import {AppContainer} from "./injectors";

const compression = require('compression');
const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(compression());
app.use((req, res, next) => {
    const startAt = process.hrtime();
    req.on('end', () => {
        const diff = process.hrtime(startAt);
        const response = Object.assign({}, res, { responseTime: diff[1]/1000000 });
        AppContainer.logger.info({ req, res: response });
    });
    next();
});
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

async function main() {
    const server = new Server(app, config);
    try {
        await server.connectToDb();
        await server.run();
    } catch (err) {
        AppContainer.logger.info(err);
        process.exit(1);
    }
}

main();
