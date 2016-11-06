export interface IRepository {
    getAll();
    create<T>(entity: T);
}