declare module '@app/server' {

    import {Db} from "mongodb";

    export interface IServerOptions {
        useMongo?: boolean;
    }

    export interface IServer {
        connectMongoDb(): Promise<Db>;
        listen(): void;
    }

}
