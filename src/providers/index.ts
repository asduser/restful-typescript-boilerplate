import {MongoProvider} from "./mongo";
import {SchemaValidatorProvider} from "./schema-validator";
import {ObjectValidatorProvider} from "./object-validator";

export const mongoProvider = new MongoProvider();
export const objectValidatorProvider = new ObjectValidatorProvider();
export const schemaValidatorProvider = new SchemaValidatorProvider();
