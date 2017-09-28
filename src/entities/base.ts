export interface IEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    validate?(): Promise<boolean>;
}
