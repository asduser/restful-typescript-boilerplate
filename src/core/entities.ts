declare module '@app/entities' {

    namespace tnode {

        export interface IEntity {
            id?: string;
            createdAt?: Date;
            updatedAt?: Date;
        }

        export interface IValidationEntity {
            validate(): Promise<string[]>;
        }

    }

    export = tnode;

}
