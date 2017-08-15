import "reflect-metadata";
import * as express from 'express';
import {config} from "./config/config";

const app = express();

app.listen(config.port, config.host,() => {
    console.log(`Express app started at ${config.port} port!`);
});
