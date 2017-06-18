import "es6-shim";
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
});