import * as mongodb from "mongodb";
import {IMongoConfig} from "./models/index";
const mongoClient = new mongodb.MongoClient();

export class MongoProvider {

    private db: mongodb.Db = null;
    private config: IMongoConfig;

    public get connected(): boolean {
        return this.connection !== null;
    }
    public get connection(): mongodb.Db {
        return this.db;
    }

    constructor() {}

    public connect(config): Promise<any> {
        this.config = config;
        return mongoClient.connect(config.url || this.formatUrl(config))
            .then((db: mongodb.Db) => {
                this.db = db;
                return db;
            });
    }

    public disconnect(): Promise<any> {
        return this.db.close();
    }

    private formatUrl(cfg: IMongoConfig): string {
        return `mongodb://${cfg.host}:${cfg.port}/${cfg.db}`;
    }

}
