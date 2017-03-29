import { List } from "linqts/linq";
import { UserRepository } from "../repositories/user-repository";
import { Direction } from "../enums/direction";
import {User} from "../models/app/user";
import {async} from "q";
import {SuccessResponse} from "../models/response/SuccessResponse";
import {ErrorResponse} from "../models/response/ErrorResponse";
import {BaseResponse} from "../models/response/BaseResponse";
import {MongooseErrorHelper} from "../helpers/MongooseErrorHelper";

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
    
    /*create(user: User): Promise<boolean> {
        return this._userRepository.create(user);
    }*/

    create(user: User): Promise<any> {
        return this._userRepository.create(user).then((err) => {
            let result: BaseResponse;
            if (err) {
                //result = new ErrorResponse(400, "Validation error.", err.errors);
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
    
    paginate(query?: string, from?: number, to?:number): void{
        this.getUsers()
            .then((users) => {

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
    
    test(sortConfig: any){
        return this._userRepository.sort().sort(sortConfig);
    }
    
    test1(){
        return 100;
    }

    /*async test2(){
        return await this._userRepository.getAll2();
    }*/

}

const users = [
    {"name": "Bob", "age": "20"},
    {"name": "Tom", "age": "25"},
    {"name": "Sam", "age": "30"},
];

interface IInt {
    create<T>(entity: T);
}

class Inter implements IInt {
    collection;
    create<T>(entity: T) {
        this.collection = entity;
    };
}