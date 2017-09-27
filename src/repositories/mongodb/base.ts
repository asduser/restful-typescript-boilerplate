import {
    Collection, InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject,
    ObjectId,
} from "mongodb";
import {EntityCollectionError} from "../../errors";

export interface IMongoDBRepository<T> {
    create(model: T, options?: Object): Promise<InsertOneWriteOpResult>;
    findById(id: string, options?: Object): Promise<T>;
    find(query: Object, options?: Object): Promise<T[]>;
    updateById(id: string, query: Object, options?: Object): Promise<UpdateWriteOpResult>;
    update(filter: Object, query: Object, options?: Object): Promise<UpdateWriteOpResult>;
    removeById(id: string, options?: Object): Promise<DeleteWriteOpResultObject>;
}

export abstract class MongoDBRepository<T> implements IMongoDBRepository<T> {

    private collection: Collection<T>;

    constructor() {
        this.collection = this.getCollection();
    }

    public getCollection(): Collection<T> {
        throw new EntityCollectionError();
    }

    public create(model: T, options?: Object): Promise<InsertOneWriteOpResult> {
        return this.collection.insertOne(model);
    }

    public findById(id: string, options?: Object): Promise<T> {
        const queryData = this.normalizeObjectId(id);
        return this.collection.findOne(queryData);
    }

    public find<Object>(query: Object, options?: Object): Promise<T[]> {
        return this.collection.find(query).toArray();
    }

    public updateById(id: string, query: Object, options?: Object): Promise<UpdateWriteOpResult> {
        return this.collection.updateOne(id, query, options);
    }

    public update(filter: Object, query: Object, options?: Object): Promise<UpdateWriteOpResult> {
        return this.collection.updateMany(filter, query, options);
    }

    public removeById(id: string, options?: Object): Promise<DeleteWriteOpResultObject> {
        return this.collection.deleteOne({ id }, options);
    }

    private normalizeObjectId(id: string): Object {
        return { _id: new ObjectId(id) };
    }

}
