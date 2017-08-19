import * as mongoose from "mongoose";

export abstract class MongooseRepository<T> {

    private _db: mongoose.model<mongoose.do>;

    constructor(dbSchema: mongoose.model<mongoose.Document>){
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
                if(err){
                    console.log(err);
                    reject(err);
                }
                console.log(response);
                resolve(response);
            }, (err) => {
                console.log(err);
                reject(err);
            });
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

}