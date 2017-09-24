import {Collection} from "mongodb";
import {BaseMongoEntity} from "../base";
import {IUser} from "../../../models";
import {mongoProvider} from "../../../providers";

export class UserMongoEntity extends BaseMongoEntity<IUser> {

    constructor() {
        super();
    }

    public getCollection(): Collection {
        return mongoProvider.connection.collection('users');
    }

}
