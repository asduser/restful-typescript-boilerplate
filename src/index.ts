/*import "es6-shim";
import "reflect-metadata";
import * as path from "path";

import { Application } from "./config/express";
const app = Application.init();
const controllerDir = path.join(__dirname, "/controllers/");

import {ExpressHelper} from "./helpers/express/express-helper";
import {registerControllers, registerControllersFromFolder} from "giuseppe";
import "./controllers/index.ts";
ExpressHelper.bindApplicationMiddlewares(app);
let controls = registerControllers();
app.use(controls);

import {RouteHelper} from "./helpers/route/route-helper";
RouteHelper.countRoutes(controls);

ExpressHelper.bindCommonRequestMiddlewares(app);
app.listen(3002,() => {
    console.log("Server is running on port => ", 3002);
});*/

import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import {BlogController} from "./modules/blog/controllers/BlogController";

/*const path = require('path');
const baseDir = __dirname;
const controllersDir = path.normalize(`${baseDir}/modules/!**!/controllers/`);
const middlewaresDir = path.normalize(`${baseDir}/modules/!**!/controllers/`);
const app = createExpressServer({
    controllers: [`${controllersDir}*.ts`],
    middlewares: [`${middlewaresDir}*.ts`]
});*/

const app = createExpressServer({
    controllers: [BlogController]
});
app.listen(3001, () => {
    console.log('Express app started at 3001 port!');
});
