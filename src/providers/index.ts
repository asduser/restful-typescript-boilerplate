import {MongoProvider} from "./mongo";
import {SchemaValidatorProvider} from "./schema-validator";

export const mongoProvider = new MongoProvider();
export const schemaValidatorProvider = new SchemaValidatorProvider();
