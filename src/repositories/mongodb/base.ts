import {
    Collection, InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject,
    ObjectId,
} from "mongodb";
import {IEntity,IMongoDBRepository} from "@app/core";
import {MongoProvider, mongoProvider} from "../../providers";

export abstract class MongoDBRepository<T extends IEntity> implements IMongoDBRepository<T> {

    protected collectionName: string;
    protected get db(): MongoProvider {
        return mongoProvider;
    }

    constructor() {}

    public get collection(): Collection<T> {
        return this.db.connection.collection(this.collectionName);
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
