import {BaseService} from "../base";
import {IUser} from "../../entities";

export class UserService extends BaseService<IUser> {

    public getEntity(): IUser {
        return null;
    }

}
