import {userUpdateSchema} from "../../schemas";
import {BaseModel} from "../base";

export interface IUserCreate {
    name: string;
    email: string;
}

export class UserUpdate extends BaseModel implements IUserCreate {
    public name: string;
    public email: string;

    constructor(data) {
        super();
        this.schema = userUpdateSchema;
        this.map(data);
    }

    private map(data): void {
        if (data != null) {
            const item = data as IUserCreate;
            this.name = item.name;
            this.email = item.email;
        }
        this.currentData = data;
    }
}
