import { List } from "linqts/dist/linq";
import { UserRepository } from "../repositories/user-repository";
import { Direction } from "../enums/direction";
import {User} from "../models/app/user";
import {async} from "q";
import {SuccessResponse} from "../models/response/success";
import {ErrorResponse} from "../models/response/error";
import {BaseResponse} from "../models/response/base";
import {MongooseErrorHelper} from "../helpers/mongoose-error/mongoose-error-helper";

export class UserService {

    private _userRepository: UserRepository;

    constructor(){
        this._userRepository = new UserRepository();
    }
    
    getUsers(): Promise<any> {
        return this._userRepository.getAll();
    }
    
    getUserById(id: string): Promise<any> {
        return this._userRepository.getById(id);
    }

    create(user: User): Promise<any> {
        return this._userRepository.create(user).then((err) => {
            let result: BaseResponse;
            if (err) {
                result = new ErrorResponse(400, "Validation error.", MongooseErrorHelper.use(err.errors));
            } else {
                result = new SuccessResponse(user, `User ${user.name} was successfully created.`);
            }
            return new Promise<any>((resolve) => {
                resolve(result);
            });
        });
    }
    
    updateById(id: string, user: User): Promise<any> {
        return this._userRepository.update(id, user).then((err) => {
            let result = new SuccessResponse(user, `User ${user.name} was successfully update.`);
            return new Promise<any>((resolve) => {
                resolve(result);
            });
        });
    }

    removeById(id: string): Promise<any> {
        return this._userRepository.remove(id).then((err) => {
            let result: BaseResponse;
            if (err) {
                result = new ErrorResponse(500, "Database internal error.", MongooseErrorHelper.use(err.errors));
            } else {
                result = new SuccessResponse({id: id}, `User with id=${id} was successfully removed.`);
            }
            return new Promise<any>((resolve) => {
                resolve(result);
            });
        });
    }

    /*sortBy(direction:Direction){
        if (direction == Direction.Desc) {
            return this.getUsers()
                .then((users) => {
                    return new Promise<any>((resolve, reject) => {
                        resolve(users.reverse());
                    });
                });
        } else {
            return this.getUsers();
        }
    }*/

}