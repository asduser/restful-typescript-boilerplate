import {BaseService} from "../base";
import {IUserEntity} from "../../entities";

export class UserService extends BaseService<IUserEntity> {

    public getEntity(): IUserEntity {
        return null;
    }

}
