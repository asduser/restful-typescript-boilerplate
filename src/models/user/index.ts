import {BaseModel} from "../base";
import {userCreateSchema, ObjectSchema, IUserCreateSchema} from "../../schemas";
import {Gender} from "../population";

export interface IUser {
    name: string;
    gender: Gender;
    age: number;
}

export class UserModel extends BaseModel<IUser> implements IUser {
    public name: string;
    public gender: Gender;
    public age: number;
    public schema: ObjectSchema;

    constructor(u?: IUser){
        super(u);
        this.schema = userCreateSchema;
    }
}
