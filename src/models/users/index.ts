import {Gender} from "../population";

export interface IUser {
    id: number;
    name: string;
    gender: Gender;
    age: number;
}

export class User implements IUser {
    public id: number = null;
    public name: string = null;
    public gender: Gender;
    public age: number;

    constructor(options?) {
        this.id = options._id;
        this.name = options.name;
        this.gender = options.gender || Gender.Male;
    }
}
