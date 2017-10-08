import {Express} from "express";
import {Db} from "mongodb";
import {IServer, IServerOptions} from "@app/core";
import {config} from "../config/config";
import {mongoProvider} from "../providers/index";

const defaultOptions: IServerOptions = {
    useMongo: false
};

export class Server implements IServer {

    private options: IServerOptions = defaultOptions;
    private app: Express;

    constructor(app: Express, opts: IServerOptions = {}) {
        this.app = app;
        this.options = Object.assign({}, this.options, opts);
    }

    public connectMongoDb(): Promise<Db> {
        return mongoProvider.connect(config.mongodb);
    }

    public listen(): void {
        this.app.listen(<number>config.port, config.host,() => {
            console.log(`Application started at ${config.port} port!`);
        });
    }
}
