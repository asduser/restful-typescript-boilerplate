import {ObjectSchema} from "../schemas";
import {schemaValidatorProvider} from "../providers";

export interface IEntity {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export abstract class BaseEntity<T extends IEntity> {
    private entity: T;
    protected schema: ObjectSchema;

    constructor(e?: T) {
        this.entity = e;
    }

    public validate() {
        return schemaValidatorProvider.validate(this.entity, this.schema);
    }
}
