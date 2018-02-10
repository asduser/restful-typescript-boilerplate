import {Express} from "express";
import {IServer} from "@app/core";
import {IAppConfig} from "../config/config";

export class ExpressServer implements IServer {

    private config: IAppConfig;
    private app: Express;

    constructor(app: Express, config: IAppConfig) {
        this.app = app;
        this.config = config;
    }

    /**
     * Start listening Express server.
     */
    public run(): void {
        this.app.listen(<number>this.config.port, this.config.host,() => {
            console.log(`Application started at ${this.config.port} port!`);
        });
    }
}
