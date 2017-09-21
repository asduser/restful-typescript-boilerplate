import { UserRepository } from "../../repositories/user-repository";
import {UnprocessableEntityError, HttpMessage} from "../../http";

export class UserService {

    private _userRepository: UserRepository<IUser>;

    constructor(){
        this._userRepository = new UserRepository<IUser>();
    }
    
    getUsers(): Promise<any> {
        return this._userRepository.getAll();
    }
    
    getUserById(id: string): Promise<any> {
        return this._userRepository.getById(id);
    }

    create(user: IUser): Promise<any> {
        return this._userRepository.create(user).then((err) => {
            let result;
            if (err) {
                result = new UnprocessableEntityError(err);
            } else {
                result = new HttpMessage({
                    data: `User ${user.name} was successfully created.`
                });
            }
            return new Promise<any>((resolve, reject) => {
                resolve(result);
            });
        });
    }
    
    updateById(id: string, user: IUser): Promise<any> {
        return this._userRepository.update(id, user).then((err) => {
            const result = new HttpMessage({
                data: `User ${user.name} was successfully updated.`
            });
            return new Promise<any>((resolve) => {
                resolve(result);
            });
        });
    }

    removeById(id: string): Promise<any> {
        return this._userRepository.remove(id).then((err) => {
            let result;
            if (err) {
                result = new UnprocessableEntityError(err);
            } else {
                result = new HttpMessage({
                    data: `User with id=${id} was successfully removed.`
                });
            }
            return new Promise<any>((resolve) => {
                resolve(result);
            });
        });
    }

}
