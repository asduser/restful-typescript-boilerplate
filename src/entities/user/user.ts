import {BaseEntity, IEntity} from "../base";
import {Gender} from "../../models";
import {userCreateSchema} from "../../schemas";

export interface IUserEntity extends IEntity {
    age: number;
    gender: Gender;
    name: string;
}

export class UserEntity extends BaseEntity<IUserEntity> {
    constructor(u?: IUserEntity){
        super(u);
        this.schema = userCreateSchema;
    }
}
