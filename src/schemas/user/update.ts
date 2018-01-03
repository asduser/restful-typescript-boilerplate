import {number, object, string} from "joi";
import {SCHEMA_VALUE} from "../constant";

export const userUpdateSchema = object().keys(Object.assign({}, {
    name: string().required(),
    email: string().email().required(),
    age: number().min(SCHEMA_VALUE.USER.MIN_AGE).required(),
    gender: number().valid(SCHEMA_VALUE.USER.GENDER.ONE_OF).required(),
    createdAt: string().isoDate().optional(),
    updatedAt: string().isoDate().optional(),
}));
