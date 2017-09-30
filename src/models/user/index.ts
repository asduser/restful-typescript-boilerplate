import {BaseModel} from "../base";
import {userCreateSchema} from "../../schemas";
import {Gender} from "../population";
import {IUserEntity} from "../../entities/user/user";

export class UserModel extends BaseModel<IUserEntity> {
    constructor(u?: IUserEntity){
        super(u);
        this.schema = userCreateSchema;
    }
}

const u1 = new UserModel({name: 'bob', age: 16, gender: Gender.Male});
const u2 = new UserModel();
u1.validate();
u2.validate()
    .then((good) => console.log(good))
    .catch((bad) => console.log(bad));
