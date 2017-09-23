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

    public connect(dbConfig: IMongoConfig): Promise<any> {
        this.config = dbConfig;
        return mongoClient.connect(dbConfig.url || this.formatUrl(dbConfig), dbConfig.options)
            .then((db: mongodb.Db) => {
                this.db = db;
                return db;
            });
    }

    public disconnect(): Promise<any> {
        return this.db.close();
    }

    private formatUrl(cfg: IMongoConfig): string {
        return `mongodb://${cfg.host}:${cfg.port}/${cfg.databaseName}`;
    }

}
