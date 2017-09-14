import {Express} from "express";
import {config} from "../config/config";
import {IServerOptions} from "./models";
import {mongoProvider} from "../providers/index";

export class Server {

    private options: IServerOptions = defaultOptions;
    private app: Express;

    constructor() {}

    public start(app: Express, opts: IServerOptions = {}): void {
        this.app = app;
        this.options = Object.assign({}, this.options, opts);
        if (this.options.useMongo) {
            // if mongo uses, wait until it connected, then start express
            mongoProvider.connect(config.mongodb)
                .then((data) => {
                    this.listen();
                }).catch((err) => {
                    console.log(err);
                    process.exit();
                });
        } else {
            // in other case - just start express
            this.listen();
        }
    }

    private listen(): void {
        this.app.listen(<number>config.port, config.host,() => {
            console.log(`Application started at ${config.port} port!`);
        });
    }
}

const defaultOptions: IServerOptions = {
    useMongo: false
};
