import {IEntity} from "../base";
import {Gender} from "../../models";

export interface IUser extends IEntity {
    age: number;
    gender: Gender;
}
