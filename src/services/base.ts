import {IEntity, IService, IMongoDBRepository} from "@app/core";

export abstract class BaseService<T extends IEntity> implements IService {

    protected repository: IMongoDBRepository<T>;

    constructor(repository: IMongoDBRepository<T>) {
        this.repository = repository;
    }

}
