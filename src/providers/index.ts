import {MongoProvider, IMongoProvider} from "./mongo";
import {SchemaValidatorProvider} from "./schema-validator";
import {ObjectValidatorProvider} from "./object-validator";

export {IMongoProvider, MongoProvider};
// export const mongoProvider = new MongoProvider();
export const objectValidatorProvider = new ObjectValidatorProvider();
export const schemaValidatorProvider = new SchemaValidatorProvider();
