import {MethodNotImplementedError} from "../errors";
import {IEntity} from "../entities";

export interface IService {
    getEntity(): IEntity;
}

export abstract class BaseService implements IService {

    private model: IEntity;

    constructor() {
        this.model = this.getEntity();
    }

    // override in inherited class to return model
    public getEntity(): IEntity {
        throw new MethodNotImplementedError();
    }

    public info(): void {
        console.log(this.model);
    }

}
