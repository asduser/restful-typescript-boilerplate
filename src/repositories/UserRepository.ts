import {User} from "../models/User";
import es6PromiseLib = require('es6-promise');
import {MongooseRepository} from "./MongooseRepository";
const Promise = es6PromiseLib.Promise;
const UserSchema = require("../models/schemas/User");

export class UserRepository extends MongooseRepository<User> {
    
    constructor(){
        super(UserSchema);
    }
    
}