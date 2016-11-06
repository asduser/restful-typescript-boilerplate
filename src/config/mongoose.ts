export default class MongooseCfg {
    public static domain : string = "localhost";
    public static port : number = 27017;
    public static dbName : string = "express-simple-api";
    public static getConnection(): string {
        return `mongodb://${this.domain}:${this.port}/${this.dbName}`;
    }
}