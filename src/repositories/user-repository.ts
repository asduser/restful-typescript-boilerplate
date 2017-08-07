import {User} from "../models/app/user";
import {MongooseRepository} from "./mongoose-repository";
const UserSchema = require("../models/schemas/user");

export class UserRepository<T> extends MongooseRepository<T> {
    
    constructor() {
        super(UserSchema);
    }
    
}