import {Express} from "express";
import {config} from "../config/config";
import {IServerOptions} from "./models";
import {mongoProvider} from "../providers/index";
import {Db} from "mongodb";

const defaultOptions: IServerOptions = {
    useMongo: false
};

export class Server {

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
