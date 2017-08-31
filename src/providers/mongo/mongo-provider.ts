import * as mongodb from "mongodb";
const mongoClient = new mongodb.MongoClient();

export class MongoProvider {

    private connectionUrl: string;

    public get connectionString(): string {
        return this.connectionUrl;
    }

    public get connection() {

    }

    constructor(config: IMongoConfig) {
        this.connectionUrl = config.url || this.getUrl(config);
    }

    public connect(): void {
        mongoClient.connect(this.connectionUrl).then(() => {

        });
    }

    private getUrl(cfg: IMongoConfig): string {
        return `mongodb://${cfg.host}:${cfg.port}/${cfg.db}`;
    }

}

interface IMongoConfig {
    port: number;
    host: string;
    db?: string;
    username?: string;
    password?: string;
    url?: string;
    options?: Object;
}