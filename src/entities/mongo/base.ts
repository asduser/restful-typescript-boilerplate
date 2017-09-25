import {Collection} from "mongodb";
import {EntityCollectionError} from "../../errors";
import {IEntity} from "../entity";

export abstract class BaseMongoEntity<T> implements IEntity<T> {

    private collection: Collection;

    constructor() {
        this.collection = this.getCollection();
    }

    public getCollection(): Collection {
        throw new EntityCollectionError();
    }

    public find<Object>(query: Object): Promise<T[]> {
        return this.collection.findOne(query);
    }

    public findById(id: number | string): Promise<T> {
        return this.collection.findOne({ id });
    }

    public create(model: T) {
        return this.collection.insertOne(model);
    }

}
