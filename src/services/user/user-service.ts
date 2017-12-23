import {BaseService} from "../base";
import {IUserCreate, UserCreate} from "../../models";
import {UnprocessableError, NotFoundError, BadRequestError, DbError} from "../../http";
import {ERROR_MESSAGES} from "../../constants/error-messages";
import {ObjectId} from "mongodb";

/**
 * Wrapper to work with UserRepository and MongoDB.
 * Controller: <UsersController>.
 * MongoDB Collection: <users>.
 * Validation Entity: <UserEntity>.
 */
export class UserService extends BaseService {

    /**
     * Find all users in DB and return.
     * @param {Object} query MongoDB query to find documents
     * @returns {Promise<IUserEntity[]>}
     */
    public async findAll(query = {}) {
        const result = await this.userRepository.find(query);
        return this.normalizeResponse(result);
    }

    /**
     * Find user in DB by ObjectId.
     * @param {string} id
     * @returns {Promise<never | IUserEntity>}
     */
    public async findById(id: string) {
        let result;
        try {
            await this.checkObjectId(id);
        } catch (err) {
            throw new BadRequestError(ERROR_MESSAGES.WRONG_MONGODB_OBJECT_ID);
        }
        try {
            result = await this.userRepository.findOne({ id });
        } catch (err) {
            throw new DbError(err);
        }
        if (!result) {
            throw new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND);
        }
        return this.normalizeResponse(result);
    }

    /**
     * Add new user into DB. Before adding will be called entity validation.
     * If it failed - should be rejected an error.
     * @param {IUserCreate} data
     * @returns {Promise<any>}
     */
    public async create(data: IUserCreate) {
        let result, validData;
        const user = new UserCreate(data);
        try {
            validData = await user.validate();
            await this.checkIfEmailExist(validData.email);
        } catch (error) {
            throw new UnprocessableError(error);
        }
        try {
            result = await this.userRepository.create(validData);
        } catch (error) {
            throw new DbError(error);
        }
        return this.normalizeResponse(result.ops[0]);
    }

    /**
     * Find user by ObjectId in DB and then delete.
     * @param {string} id
     * @returns {Promise<never | DeleteWriteOpResultObject>}
     */
    public async removeById(id: string) {
        const user = await this.findById(id);
        try {
            await this.userRepository.removeOne(user._id);
        } catch (err) {
            throw new DbError(err);
        }
        return true;
    }

    public async checkIfEmailExist(email: string) {
        return new Promise(async (resolve, reject) => {
            const user = await this.userRepository.findOne({ email });
            if (user != null) {
                reject('User with this email already exist!');
            }
            resolve();
        });
    }

    private checkObjectId(id: string) {
        return new Promise((resolve, reject) => {
            if (ObjectId.isValid(id)) {
                resolve();
            }
            reject('Wrong ObjectID format!');
        });
    }
}
