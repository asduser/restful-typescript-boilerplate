declare module '@app/repositories' {

    import {
        InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject,
    } from "mongodb";
    import {IEntity} from "@app/entities";

    namespace tnode {

        export interface IMongoDBRepository<T extends IEntity> {
            create(model: T, options?: Object): Promise<InsertOneWriteOpResult>;
            findById(id: string, options?: Object): Promise<T>;
            find(query: Object, options?: Object): Promise<T[]>;
            updateById(id: string, query: Object, options?: Object): Promise<UpdateWriteOpResult>;
            update(filter: Object, query: Object, options?: Object): Promise<UpdateWriteOpResult>;
            removeById(id: string, options?: Object): Promise<DeleteWriteOpResultObject>;
        }

    }

    export = tnode;

}
