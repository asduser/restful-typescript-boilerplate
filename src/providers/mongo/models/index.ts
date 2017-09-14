export interface IMongoConfig {
    port: number;
    host: string;
    db?: string;
    username?: string;
    password?: string;
    url?: string;
    options?: Object;
}
