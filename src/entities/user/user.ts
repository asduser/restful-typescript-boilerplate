import {IEntity} from "../base";
import {Gender} from "../../models";

export interface IUserEntity extends IEntity {
    age: number;
    gender: Gender;
    name: string;
}
