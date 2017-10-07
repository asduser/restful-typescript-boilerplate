import {IEntity} from "../entities";
import {IMongoDBRepository} from "../repositories";

export interface IService {}

export abstract class BaseService<T extends IEntity> implements IService {

    protected repository: IMongoDBRepository<T>;

    constructor(repository: IMongoDBRepository<T>) {
        this.repository = repository;
    }

}
