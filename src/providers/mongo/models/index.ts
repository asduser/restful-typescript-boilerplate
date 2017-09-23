export interface IMongoConfig {
    port: string | number;
    host: string;
    databaseName?: string;
    username?: string;
    password?: string;
    url?: string;
    options?: Object;
}
