import {BaseService} from "../base";
import {IUserEntity} from "../../entities";
import {UserRepository} from "../../repositories";
import {UserEntity} from "../../entities/user/user";
import {UnprocessableError, NotFoundError, BadRequestError, DbError} from "../../http";
import {MESSAGES} from "../../constants/messages";
import {ERROR_CODES} from "../../constants/error-codes";

const userRepository = new UserRepository();

export class UserService extends BaseService<IUserEntity> {

    constructor() {
        super(userRepository);
    }

    public findAll() {
        return this.repository.find({});
    }

    public findById(id: string) {
        return this.repository.findById(id)
            .then((user) => {
                if (!user) {
                    return Promise.reject(new NotFoundError(MESSAGES.USER_NOT_FOUND));
                }
                return Promise.resolve(user);
            })
            .catch((err) => {
                if (err.code === ERROR_CODES.INCORRECT_OBJECT_ID) {
                    return Promise.reject(new BadRequestError(MESSAGES.WRONG_MONGODB_OBJECT_ID))
                }
                return Promise.reject(new DbError(err));
            });
    }

    public async create(data: UserEntity) {
        // const user = new UserEntity(data);
        // return user.validate()
        //     .then(() => this.repository.create(user.entity))
        //     .catch((err) => {
        //         if (err.code === ERROR_CODES.ENTITY_VALIDATION_FAILED) {
        //             return Promise.reject(new BadRequestError(MESSAGES.WRONG_MONGODB_OBJECT_ID))
        //         }
        //         return Promise.reject(new DbError(err));
        //     });
        // const user = new UserEntity(data);
        // try {
        //     await user.validate();
        //     try {
        //         this.repository.create(user.entity);
        //     } catch (error) {
        //         return Promise.reject(new DbError(error));
        //     }
        // } catch (error) {
        //     return Promise.reject(new UnprocessableError(error));
        // }
        const user = new UserEntity(data);
        return user.validate()
            .then(() => this.repository.create(user.entity), (error) => {
                return Promise.reject(new UnprocessableError(error));
            })
            .catch((err) => Promise.reject(new DbError(err)));
    }

}
