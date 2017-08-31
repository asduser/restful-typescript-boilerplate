import {config} from "../config/config";
import {MongoProvider} from "./mongo";

// database connecting
export const mongoProvider = new MongoProvider({
    host: config.host,
    port: config.port
});

mongoProvider.connect()