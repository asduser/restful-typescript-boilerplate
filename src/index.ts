import "./config/env-resolver";
import "reflect-metadata";
import * as express from 'express';
import {config} from "./config/config";

// routes
import {infoRoute} from "./endpoint/info";

const app = express();
app.use('/info', infoRoute);

app.listen(config.port, config.host,(data) => {
    console.log(data);
    console.log(`Express app started at ${config.port} port!`);
});
