import {IEntity} from "../entity";

export interface IService {
    getEntity(): IEntity;
    info(): void;
}
