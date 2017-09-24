export interface IEntity<T> {
    find<QueryType>(query: QueryType);
    findById(id: number);
    create(model: T);
}
