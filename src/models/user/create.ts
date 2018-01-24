import {userCreateSchema} from "../../schemas";
import {BaseModel} from "../base";

export interface IUserCreate {
    name: string;
    email: string;
}

export class UserCreate extends BaseModel implements IUserCreate {
    public name: string;
    public email: string;

    constructor(data) {
        super(data);
        const item = <any>data;
        this.schema = userCreateSchema;
        this.name = item.name;
        this.email = item.email;
    }
}
