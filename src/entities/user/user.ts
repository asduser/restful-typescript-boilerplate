import {IEntity} from "@app/core";
import {BaseEntity} from "../base";
import {Gender} from "../../models";
import {userCreateSchema} from "../../schemas";

export interface IUserEntity extends IEntity {
    age: number;
    gender: Gender | number;
    name: string;
}

export class UserEntity extends BaseEntity<IUserEntity> {
    public age: number;
    public gender: Gender | number;
    public name: string;

    constructor(u: IUserEntity){
        super(u);
        this.schema = userCreateSchema;
    }
}
