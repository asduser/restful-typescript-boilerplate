import {ObjectSchema} from "../schemas";
import {schemaValidatorProvider} from "../providers";
import {IEntity} from "@app/core";

export abstract class BaseEntity<T extends IEntity> {

    protected schema: ObjectSchema;
    public entity: T;

    constructor(e: T) {
        this.entity = e;
    }

    public validate(): Promise<string[]> {
        return schemaValidatorProvider.validate(this.entity, this.schema);
    }
}
