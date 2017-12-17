declare module '@app/repositories' {

    import {
        InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject,
    } from "mongodb";
    import {IEntity} from "@app/entities";

    export interface IMongoDBRepository<T extends IEntity> {
        create(filter: Object, options?: Object): Promise<InsertOneWriteOpResult>;
        findOne(filter: Object, options?: Object): Promise<T>;
        find(filter: Object, options?: Object): Promise<T[]>;
        updateOne(filter: Object, query: Object, options?: Object): Promise<UpdateWriteOpResult>;
        update(filter: Object, query: Object, options?: Object): Promise<UpdateWriteOpResult>;
        removeOne(filter: Object, options?: Object): Promise<DeleteWriteOpResultObject>;
        runCommand(cmd: Object);
    }

}
