import {Collection} from "mongodb";
import {EntityCollectionError} from "../../errors";
import {IEntity} from "../entity";

export abstract class BaseMongoEntity<T> implements IEntity<T> {

    private collection: Collection;
    public id: number;

    constructor() {
        this.collection = this.getCollection();
    }

    public getCollection(): Collection {
        throw new EntityCollectionError();
    }

    public find(query: Object = {}) {
        return this.collection.findOne(query);
    }

    public findById(id: number) {
        return this.collection.findOne({ id });
    }

    public create(model: T) {
        return this.collection.insertOne(model);
    }

}
