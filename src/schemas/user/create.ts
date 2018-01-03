import {string, object} from "joi";

export const userCreateSchema = object().keys(Object.assign({}, {
    name: string().required(),
    email: string().email().required(),
}));
