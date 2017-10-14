import {MongoProvider, IMongoProvider} from "./mongo";
import {SchemaValidatorProvider} from "./schema-validator";
import {ObjectValidatorProvider} from "./object-validator";
import {IoC} from "./inversion-of-control";

export {IMongoProvider, MongoProvider};
export const mongoProvider = new MongoProvider();
export const ioc = new IoC();
export const objectValidatorProvider = new ObjectValidatorProvider();
export const schemaValidatorProvider = new SchemaValidatorProvider();
