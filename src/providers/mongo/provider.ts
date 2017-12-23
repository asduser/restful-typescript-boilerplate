import { Db, MongoClient } from "mongodb";
import { IMongoProvider } from "./models/index";

const mongoClient = new MongoClient();

export class MongoProvider implements IMongoProvider {

    private db: Db = null;

    public get connected(): boolean {
        return this.connection !== null;
    }
    public get connection(): Db {
        return this.db;
    }

    public connect(url: string): Promise<Db> {
        if (url === null) {
            throw new Error('MongoDB url should be defined!');
        }
        return mongoClient.connect(url)
            .then((db: Db) => {
                this.db = db;
                return db;
            });
    }

    public disconnect(): Promise<void> {
        return this.db.close();
    }

}
