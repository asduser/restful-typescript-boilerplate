import {EntityCollectionError} from "../errors";

export interface IEntity {
    id: number;
    _id: string;
    getCollection(): string;
}

export abstract class BaseEntity implements IEntity {

    private collection: string;
    public _id: string;
    public id: number;

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
