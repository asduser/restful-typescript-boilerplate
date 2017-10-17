import {
    Collection, InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject,
    ObjectId,
} from "mongodb";
import {IEntity,IMongoDBRepository} from "@app/core";
import {IMongoProvider, mongoProvider} from "../../providers";

export abstract class MongoDBRepository<T extends IEntity> implements IMongoDBRepository<T> {

    protected collectionName: string;
    protected get db(): IMongoProvider {
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
        return this.validateObjectId(id)
            .then((queryData) => this.collection.findOne(queryData));
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
        return this.validateObjectId(id)
            .then(() => this.collection.deleteOne({ _id: id }, options));
    }

    private validateObjectId(id: string): Promise<Object> {
        return new Promise((resolve, reject) => {
            if (ObjectId.isValid(id)) {
                resolve({ _id:  new ObjectId(id)});
            }
            reject({ code: 2001 });
        });
    }

}
