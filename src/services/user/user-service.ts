import {BaseService} from "../base";
import {IEntity} from "../../entities";
import {IUser} from "../../models";

export class UserService extends BaseService<IUser> {

    public getEntity(): IEntity<IUser> {
        return null;
    }

}
