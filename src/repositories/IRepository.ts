export interface IRepository {
    getById(id: string);
    getAll();
    create<T>(entity: T);
    update<T>(id: string, entity: T);
}