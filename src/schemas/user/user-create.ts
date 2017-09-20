import {number, string, object} from "joi";

export const userCreateSchema = object().keys({
    name: string().required(),
    age: number().min(18).required(),
    gender: number().valid([0, 1]).required()
});
