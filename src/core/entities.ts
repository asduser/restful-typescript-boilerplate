declare module '@app/entities' {

    export interface IEntity {
        id?: string;
        _id?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }

    export interface IValidationEntity {
        validate(): Promise<string[]>;
    }

}
