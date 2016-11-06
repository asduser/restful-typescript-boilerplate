import {User} from "../models/User";
import es6PromiseLib = require('es6-promise');
import {MongooseRepository} from "./MongooseRepository";
const Promise = es6PromiseLib.Promise;
const UserSchema = require("../models/schemas/User");

/*
export class UserRepository {

    public getAll(){
        return new Promise<any>((resolve, reject) => {
            UserSchema.find({}, (err, users) => {
                if(err){ reject(err); }
                resolve(users);
            })
        });
    }

    public create(body: User){
        return new Promise<any>((resolve, reject) => {
            console.log(body);
            if (!body.name) { reject("Can't add null-object into DB.") }
            UserSchema.create(body, (err) => {
                if(err){ reject(err); }
                resolve(`User with name '${body.name}' was created.`);
                resolve(true);
            })
        });
    }

}*/

export class UserRepository extends MongooseRepository<User> {
    
    constructor(){
        super(UserSchema);
    }
    
}