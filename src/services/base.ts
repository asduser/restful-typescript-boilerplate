import {MethodNotImplementedError} from "../errors";
import {IEntity} from "../entities";

export interface IService<T extends IEntity> {
    getEntity(): T;
}

export abstract class BaseService<T extends IEntity> implements IService<T> {

    private model: T;

    constructor() {
        this.model = this.getEntity();
    }

    // override in inherited class to return an entity
    public getEntity(): T {
        throw new MethodNotImplementedError();
    }

    public test(): T {
        return this.model;
    }

}
