import {
    Collection, InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject,
    ObjectId,
} from "mongodb";
import {IEntity,IMongoDBRepository} from "@app/core";
import {IMongoProvider} from "../../providers";
import {AppContainer} from "../../injectors";

export abstract class MongoDBRepository<T extends IEntity> implements IMongoDBRepository<T> {

    protected collectionName: string;
    protected get db(): IMongoProvider {
        return AppContainer.getItems().mongoProvider;
    }

    /**
     * Return MongoDB collection.
     * @returns {Collection<T extends "@app/entities".IEntity>}
     */
    public get collection(): Collection<T> {
        return this.db.connection.collection(this.collectionName);
    }

    /**
     * Add a new document into MongoDB collection.
     * @param {Object} filter Data to insert
     * @param {Object} options Additional query options
     * @returns {Promise<InsertOneWriteOpResult>}
     */
    public create(filter: Object, options?: Object): Promise<InsertOneWriteOpResult> {
        return this.collection.insertOne(filter, options);
    }

    /**
     * Return MongoDB single document.
     * @param {Object} filter MongoDB find query
     * @param {Object} options Additional query options
     * @returns {Promise<T extends "@app/entities".IEntity>}
     */
    public findOne(filter: Object, options: Object = {}): Promise<T> {
        const normalizedFilter = this.normalizeFilter(filter);
        return this.collection.findOne(normalizedFilter, options);
    }

    /**
     * Return an array of MongoDB documents.
     * @param {Object} filter MongoDB find query
     * @param {Object} options Additional query options
     * @returns {Promise<T extends "@app/entities".IEntity[]>}
     */
    public find(filter: Object, options?: Object): Promise<T[]> {
        return this.collection.find(filter).toArray();
    }

    /**
     * Find and update the document.
     * @param {Object} filter MongoDB find query
     * @param {Object} updated Update this data in the found document
     * @param {Object} options Additional query options
     * @returns {Promise<UpdateWriteOpResult>}
     */
    public updateOne(filter: Object, updated: Object, options?: Object): Promise<UpdateWriteOpResult> {
        const normalizedFilter = this.normalizeFilter(filter);
        return this.collection.updateOne(normalizedFilter, updated, options);
    }

    /**
     * Find and update many documents.
     * @param {Object} filter MongoDB find query
     * @param {Object} updated Update this data in found documents
     * @param {Object} options Additional query options
     * @returns {Promise<UpdateWriteOpResult>}
     */
    public update(filter: Object, updated: Object, options?: Object): Promise<UpdateWriteOpResult> {
        return this.collection.updateMany(filter, updated, options);
    }

    /**
     * Find and remove one document from MongoDB collection.
     * @param {Object} filter MongoDB find query
     * @param {Object} options Additional query options
     * @returns {Promise<DeleteWriteOpResultObject>}
     */
    public removeOne(filter: Object, options?: Object): Promise<DeleteWriteOpResultObject> {
        const normalizedFilter = this.normalizeFilter(filter);
        return this.collection.deleteOne(normalizedFilter, options);
    }

    /**
     * Transform an existing filter into MongoDB query format.
     * @param {Object} filter
     * @returns {Object}
     */
    private normalizeFilter(filter) {
        const query = Object.assign({}, filter);
        // set ObjectId to work with 'find' queries
        if (query.id) {
            query._id = new ObjectId(filter.id);
        }
        delete query.id;
        return query;
    }

}
