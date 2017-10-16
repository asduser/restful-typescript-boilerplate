import {number, string, object, ObjectSchema} from "joi";
import {entitySchema} from "../entity";
import {SCHEMA_VALUE} from "../constant";

export interface IUserCreateSchema extends ObjectSchema {}

export const userCreateSchema = object().keys(Object.assign({
    name: string().required(),
    age: number().min(SCHEMA_VALUE.USER.MIN_AGE).required(),
    gender: number().valid(SCHEMA_VALUE.USER.GENDER.ONE_OF).required(),
}, entitySchema));
