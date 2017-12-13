declare module '@app/server' {

    import {Db} from "mongodb";

    export interface IServerOptions {
        useMongo?: boolean;
    }

    export interface IServer {
        dbConnect(): Promise<Db>;
        run(): void;
    }

}
