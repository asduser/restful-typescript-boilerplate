export interface IRepository<T> {
    getById(id: string);
    getAll();
    create(entity: T);
    update(id: string, entity: T);
}