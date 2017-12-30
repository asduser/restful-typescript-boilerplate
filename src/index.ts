import "./config/init";
import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import {registerControllers} from "./controllers";
import { Server } from "./server";
import * as routes from "./endpoint";
import * as middlewares from "./middlewares";
import {winstonLogger} from "./providers/loggers/winston";
import {config} from "./config/config";

const compression = require('compression');
const app = express();

// common handlers
app.disable('etag');
app.disable('x-powered-by');
app.use(winstonLogger);
app.use(compression());
app.use((req, res, next) => {
    const startAt = process.hrtime();
    console.log('===');
    console.log(startAt);
    console.log('===');
    req.on('end', () => {
        const diff = process.hrtime(startAt);
        console.log('===');
        console.log(diff);
        console.log(`${diff[0]} s`);
        console.log(`${diff[1]/1000000} ms`);
        console.log('===');
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
        console.log(err);
        process.exit(1);
    }
}

main();
