import {BaseService} from "../base";
import {UserEntity} from "../../entities/user/user";
import {UnprocessableError, NotFoundError, BadRequestError, DbError} from "../../http";
import {MESSAGES} from "../../constants/messages";
import {ERROR_CODES} from "../../constants/error-codes";

/**
 * Wrapper to work with UserRepository and MongoDB.
 * Controller: <UsersController>.
 * MongoDB Collection: <users>.
 * Validation Entity: <UserEntity>.
 */
export class UserService extends BaseService {

    /**
     * Find all users in DB and return.
     * @returns {Promise<IUserEntity[]>}
     */
    public findAll() {
        return this.userRepository.find({});
    }

    /**
     * Find user in DB by ObjectId.
     * @param {string} id
     * @returns {Promise<never | IUserEntity>}
     */
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

    /**
     * Add new user into DB. Before adding will be called entity validation.
     * If it failed - should be rejected an error.
     * @param {UserEntity} data
     * @returns {Promise<any>}
     */
    public async create(data: UserEntity) {
        const user = new UserEntity(data);
        try {
            await user.validate();
        } catch (error) {
            throw new UnprocessableError(error);
        }
        try {
            return this.userRepository.create(user.entity);
        } catch (error) {
            throw new DbError(error);
        }
    }

    /**
     * Find user by ObjectId in DB and then delete.
     * @param {string} id
     * @returns {Promise<never | DeleteWriteOpResultObject>}
     */
    public remove(id: string) {
        return this.findById(id)
            .then((user) => this.userRepository.removeById(user._id))
            .catch((err) => Promise.reject(new DbError(err)));
    }

}
