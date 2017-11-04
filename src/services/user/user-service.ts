import {BaseService} from "../base";
import {UserEntity, IUserEntity} from "../../entities/user/user";
import {UnprocessableError, NotFoundError, BadRequestError, DbError} from "../../http";
import {ERROR_MESSAGES} from "../../constants/error-messages";
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
    public async findAll() {
        return await this.userRepository.find({});
    }

    /**
     * Find user in DB by ObjectId.
     * @param {string} id
     * @returns {Promise<never | IUserEntity>}
     */
    public async findById(id: string) {
        try {
            const user = await this.userRepository.findById(id);
            if (!user) {
                return Promise.reject(new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND));
            }
            return Promise.resolve(user);
        } catch (err) {
            if (err.code === ERROR_CODES.INCORRECT_OBJECT_ID) {
                return Promise.reject(new BadRequestError(ERROR_MESSAGES.WRONG_MONGODB_OBJECT_ID))
            }
            return Promise.reject(new DbError(err));
        }
    }

    /**
     * Add new user into DB. Before adding will be called entity validation.
     * If it failed - should be rejected an error.
     * @param {IUserEntity} data
     * @returns {Promise<any>}
     */
    public async create(data: IUserEntity) {
        const user = new UserEntity(data);
        try {
            await user.validate();
        } catch (error) {
            return Promise.reject(new UnprocessableError(error));
        }
        try {
            return await this.userRepository.create(user.currentData);
        } catch (error) {
            return Promise.reject(new DbError(error));
        }
    }

    /**
     * Find user by ObjectId in DB and then delete.
     * @param {string} id
     * @returns {Promise<never | DeleteWriteOpResultObject>}
     */
    public async remove(id: string) {
        const user = await this.findById(id);
        try {
            return await this.userRepository.removeById(user._id);
        } catch (err) {
            return Promise.reject(new DbError(err))
        }
    }

}
