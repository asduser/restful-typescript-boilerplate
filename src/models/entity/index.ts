export interface IEntity {
    id: number;
    _id: string;
    getCollection(): string;
}