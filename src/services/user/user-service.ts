import {BaseService} from "../base";
import {IUserEntity} from "../../entities";
import {UserRepository} from "../../repositories";
import {UserEntity} from "../../entities/user/user";
import {UnprocessableEntityError} from "../../http";

const userRepository = new UserRepository();

export class UserService extends BaseService<IUserEntity> {

    constructor() {
        super(userRepository);
    }

    public findAll() {
        return this.repository.find({});
    }

    public create(data: UserEntity) {
        const user = new UserEntity(data);
        return user.validate()
            .then(() => this.repository.create(user.entity))
            .catch((err) => Promise.reject(new UnprocessableEntityError(err)));
    }

}
