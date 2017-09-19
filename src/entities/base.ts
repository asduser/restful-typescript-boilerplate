import {EntityCollectionError} from "../errors";
import {IEntity} from "../models";

export abstract class BaseEntity {

    private collection: string;

    constructor() {
        this.collection = this.getCollection();
    }

    public getCollection(): string {
        throw new EntityCollectionError();
    }

    public test(): string {
        return this.collection;
    }

}
