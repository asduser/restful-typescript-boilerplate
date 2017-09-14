import {User} from "../models/app/user";
import {MongoRepository} from "./mongoose-repository";
const UserSchema = require("../models/schemas/user");

export class UserRepository<T> extends MongoRepository<T> {
    
    constructor() {
        super(UserSchema);
    }
    
}
