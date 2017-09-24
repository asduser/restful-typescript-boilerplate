import {Gender} from "../population";

export interface IUser {
    id?: number;
    name: string;
    gender: Gender;
    age: number;
}

export class User implements IUser {
    public id: number = null;
    public name: string = null;
    public gender: Gender;
    public age: number;

    constructor(model?: IUser) {
        if (model) {
            this.id = model.id;
            this.name = model.name;
            this.age = model.age;
            this.gender = model.gender;
        }
    }
}
