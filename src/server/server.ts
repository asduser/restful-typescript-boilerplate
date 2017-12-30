import {Express} from "express";
import {Db} from "mongodb";
import {IServer} from "@app/core";
import {IAppConfig} from "../config/config";
import {AppContainer} from "../injectors";

export class Server implements IServer {

    private config: IAppConfig;
    private app: Express;

    constructor(app: Express, config: IAppConfig) {
        this.app = app;
        this.config = config;
    }

    public connectToDb(): Promise<Db> {
        return AppContainer.mongoProvider.connect(this.config.mongodb.url);
    }

    public run(): void {
        this.app.listen(<number>this.config.port, this.config.host,() => {
            console.log(`Application started at ${this.config.port} port!`);
        });
    }
}
