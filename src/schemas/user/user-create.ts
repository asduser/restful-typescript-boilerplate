import {number, string, object} from "joi";
import {entitySchema} from "../entity";
import {SCHEMA_VALUE} from "../constant";

export const userCreateSchema = object().keys(Object.assign(entitySchema,{
    name: string().required(),
    email: string().email().required(),
}));

export const userUpdateSchema = object().keys(Object.assign(entitySchema, {
    name: string().required(),
    age: number().min(SCHEMA_VALUE.USER.MIN_AGE).required(),
    gender: number().valid(SCHEMA_VALUE.USER.GENDER.ONE_OF).required(),
    email: string().email().required(),
}));
