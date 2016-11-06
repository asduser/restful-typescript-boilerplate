import mongooseCfg from '../../config/mongoose';
const mongoose = require('mongoose');

export default class MongooseDB {
    private connectionString: string;
    constructor(){
        this.connectionString = mongooseCfg.getConnection();
        mongoose.Promise = global.Promise;
    }
    public connect(connection: string = this.connectionString): void {
        mongoose.connect(connection)
            .then(() => console.log('connection succesful') )
            .catch((err) => console.error(err));
    }
}