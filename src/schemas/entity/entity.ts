import {string} from "joi";

export const entitySchema = {
    createdAt: string().isoDate().optional(),
    updatedAt: string().isoDate().optional()
};
