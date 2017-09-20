import {MongoRepository} from "./mongoose-repository";
const userSchema = require("../models/schemas/user");

export class UserRepository<T> extends MongoRepository<T> {
    
    constructor() {
        super(userSchema);
    }
    
}
