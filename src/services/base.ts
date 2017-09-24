import {MethodNotImplementedError} from "../errors";
import {IEntity} from "../entities";

export interface IService<T> {
    getEntity(): IEntity<T>;
}

export abstract class BaseService<T> implements IService<T> {

    private model: IEntity<T>;

    constructor() {
        this.model = this.getEntity();
    }

    // override in inherited class to return an entity
    public getEntity(): IEntity<T> {
        throw new MethodNotImplementedError();
    }

    public info(): void {
        console.log(this.model);
    }

}
