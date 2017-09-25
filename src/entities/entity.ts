export interface IEntity<T> {
    find<QueryType>(query: QueryType): Promise<T[]>;
    findById(id: string): Promise<T>;
    create(model: T);
    // updateById(id: string, query: Object, options?: Object): Promise<any>;
}
