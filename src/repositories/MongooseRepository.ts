import {IRepository} from "./IRepository";
import * as mongoose from "mongoose";

export abstract class MongooseRepository<T> implements IRepository {

    private _db: mongoose.Model<mongoose.Document>;

    constructor(dbSchema: mongoose.Model<mongoose.Document>){
        this._db = dbSchema;
    }

    getAll() {
        return new Promise<any>((resolve, reject) => {
            this._db.find({}, (err, response) => {
                if(err){ reject(err); }
                resolve(response);
            })
        });
    }

    /*async getAll2() {
        return await this._db.find({}, (err, response) => {
            await response;
        })
    }*/

    create(entity:T) {
        return new Promise<any>((resolve, reject) => {
            this._db.create(entity, (err) => {
                //if(err){ reject(err.message); }
                //resolve(true);
                resolve(err);
            })
        });
    }

    sort() {
        return this._db.find({});
    }

}