export abstract class BaseEntity {

    protected collection: string;

    public getCollection() {
        if (!this.collection) {
            throw new Error('');
        }
        return this.collection;
    }

}