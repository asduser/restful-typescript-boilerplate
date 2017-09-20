import {number, string, required, object, valid} from "joi";

export const userCreateSchema = object().keys({
    name: string().required(),
    age: number().min(18).required(),
    gender: number().valid([0, 1]).required()
});
