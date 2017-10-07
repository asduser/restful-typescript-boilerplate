import {
    MongoDBRepository,
} from "./base";
import {IUserEntity} from "../../entities";

export class UserRepository extends MongoDBRepository<IUserEntity> {

    constructor() {
        super();
        this.collectionName = 'users';
    }

}
