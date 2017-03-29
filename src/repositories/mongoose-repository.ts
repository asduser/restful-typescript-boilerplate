import {IRepository} from "./repository";
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
            });
        });
    }
    
    getById(id: string) {
        return new Promise<any>((resolve, reject) => {
            this._db.findById(id, (err, response) => {
                if(err){ reject(err); }
                resolve(response);
            })
        });
    }

    create(entity:T) {
        return new Promise<any>((resolve, reject) => {
            this._db.create(entity, (err) => {
                resolve(err);
            });
        });
    }

    update(id: string, entity: T) {
        return new Promise<any>((resolve, reject) => {
            this._db.findByIdAndUpdate(id, {$set: entity}, (err) => {
                resolve(err);
            });
        });
    }
    
    remove(id: string) {
        return new Promise<any>((resolve, reject) => {
            this._db.findByIdAndRemove(id, (err) => {
                resolve(err);
            });
        });
    }

    sort() {
        return this._db.find({});
    }

}