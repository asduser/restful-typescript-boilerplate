const mongoose = require('mongoose');

export class MongooseDB {
    
    // Private fields.
    private _connection: any;

    constructor(domain: string, port?: number, dbName?: string){
        mongoose.Promise = global.Promise;
        let dbConnection = this.getConnection(domain, port, dbName);
        this._connection = mongoose.connect(dbConnection)
            .then(() => console.log('Connected successfully.') )
            .catch((err) => console.error(err));
    }

    // Private methods.
    private getConnection(domain: string, port: number, dbName?: string): string {
        if (!port || !dbName) {
            return domain;
        }
        return `mongodb://${domain}:${port}/${dbName}`;
    }

    // Public methods.
    public disconnect(): void {
        this._connection.disconnect();
    }
    
} 