import {Gender} from "../population";
import {IUserEntity} from "../../entities";

export class User implements IUserEntity {
    public createdAt: Date;
    public updatedAt: Date;
    public id: string;
    public name: string;
    public gender: Gender;
    public age: number;

    constructor(model?: IUserEntity) {
        if (model) {
            this.id = model.id;
            this.name = model.name;
            this.age = model.age;
            this.gender = model.gender;
        }
    }
}
