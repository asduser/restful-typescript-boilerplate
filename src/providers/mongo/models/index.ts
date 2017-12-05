import { Db } from "mongodb";

export interface IMongoConfig {
    port: string | number;
    host: string;
    databaseName?: string;
    username?: string;
    password?: string;
    url?: string;
    options?: Object;
}

export interface IMongoProvider {
    connection: Db;
    connected: boolean;
    connect(dbConfig: IMongoConfig): Promise<Db>;
    disconnect(): Promise<void>;
}
