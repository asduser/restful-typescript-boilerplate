declare module '@app/server' {

    import {Db} from "mongodb";

    export interface IServer {
        connectToDb(): Promise<Db>;
        run(): void;
    }

}
