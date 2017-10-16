import {BaseService} from "../base";
import {UserEntity} from "../../entities/user/user";
import {UnprocessableError, NotFoundError, BadRequestError, DbError} from "../../http";
import {MESSAGES} from "../../constants/messages";
import {ERROR_CODES} from "../../constants/error-codes";

export class UserService extends BaseService {

    public findAll() {
        return this.userRepository.find({});
    }

    public findById(id: string) {
        return this.userRepository.findById(id)
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
        const user = new UserEntity(data);
        try {
            await user.validate();
        } catch (error) {
            return Promise.reject(new UnprocessableError(error));
        }
        try {
            return this.userRepository.create(user.entity);
        } catch (error) {
            return Promise.reject(new DbError(error));
        }
    }

    public remove(id: string) {
        return this.findById(id)
            .then((user) => this.userRepository.removeById(user._id))
            .catch((err) => Promise.reject(new DbError(err)));
    }

}
