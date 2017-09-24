export interface IEntity<T> {
    find(query: Object);
    findById(id: number);
    create(model: T);
}
