import * as http from "http";
import config from "./config/config";

import "es6-shim";
import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import * as path from "path";
//import "./controllers/UserController.ts";

import { Request, Response} from "express";

//let express = require("express"); // or you can import it if you have installed typings
//let app = express(); // your created express server
// app.use() // maybe you configure it the way you want

//const app = require("./config/express").default();
import { Application } from "./config/express";
const app = Application.init();
const controllerDir = path.join(__dirname, "/controllers/");

/*useExpressServer(app, {
    controllers: [
        controllerDir + "*.ts",
        //path.join(__dirname, "/controllers/main/MainController.ts")
    ]

}).listen(3002);*/

/*app.use((request: Request, response: Response, next: any) => {
    let notFound = new ResponseModel(404, false, null, null, "Not found 404.");
    response.send(notFound);
    next();
});*/

import {ExpressHelper} from "./helpers/express/express-helper";
import {registerControllers, registerControllersFromFolder} from "giuseppe";
//import "./controllers/UserController.ts";
import "./controllers/index.ts";
ExpressHelper.bindApplicationMiddlewares(app);
let controls = registerControllers();
//console.log(controls);
app.use(controls);

import {RouteHelper} from "./helpers/route/route-helper";
RouteHelper.countRoutes(controls);

/*registerControllersFromFolder({
    folderPath: './controllers'
}).then(router => {
    app.use(router);
}).catch((err: any) => {
    console.log(err);
});*/

ExpressHelper.bindCommonRequestMiddlewares(app);
app.listen(3002,() => {
    console.log("Server is running on port => ", 3002);
});


// Init the express application
/*
const app = require("./config/express").default();

const server: http.Server = http.createServer(app);

server.listen(config.port);

server.on("error", (e : Error) => {
  console.log("Error starting server" + e);
});

server.on("listening", () => {
  console.log("Server started on port " + config.port);
});*/

/*import { Server } from "./config/server";
const s = new Server();*/