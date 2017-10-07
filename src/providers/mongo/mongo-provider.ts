import {Db, MongoClient} from "mongodb";
import {IMongoConfig} from "./models/index";
const mongoClient = new MongoClient();

export interface IMongoProvider {
    connection: Db;
    connected: boolean;
    connect(dbConfig: IMongoConfig): Promise<Db>;
    disconnect(): Promise<void>;
}

export class MongoProvider implements IMongoProvider {

    private db: Db = null;
    private config: IMongoConfig;

    public get connected(): boolean {
        return this.connection !== null;
    }
    public get connection(): Db {
        return this.db;
    }

    constructor() {}

    public connect(dbConfig: IMongoConfig): Promise<Db> {
        this.config = dbConfig;
        return mongoClient.connect(this.config.url || this.formatUrl(this.config), this.config.options)
            .then((db: Db) => {
                this.db = db;
                return db;
            });
    }

    public disconnect(): Promise<void> {
        return this.db.close();
    }

    private formatUrl(cfg: IMongoConfig): string {
        return `mongodb://${cfg.host}:${cfg.port}/${cfg.databaseName}`;
    }

}
