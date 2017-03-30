import {User} from "../models/app/user";
import es6PromiseLib = require('es6-promise');
import {MongooseRepository} from "./mongoose-repository";
const Promise = es6PromiseLib.Promise;
const UserSchema = require("../models/schemas/user");

export class UserRepository extends MongooseRepository<User> {
    
    constructor(){
        super(UserSchema);
    }
    
}