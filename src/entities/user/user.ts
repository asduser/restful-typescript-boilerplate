import {IEntity} from "@app/core";
import {Gender} from "../../models";

export interface IUserEntity extends IEntity {
    age: number;
    gender: Gender | number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
