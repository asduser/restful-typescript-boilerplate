import {IEntity, IValidationEntity} from "@app/core";
import {ObjectSchema} from "../schemas";
import {AppContainer} from "../injectors";

/**
 * Validation Entity to work with data in MongoDB queries.
 * When created a new MongoDB <Collection>, should be created a suitable entity.
 */
export abstract class BaseEntity<T extends IEntity> implements IValidationEntity {

    protected schema: ObjectSchema;
    public currentData: T;

    constructor(e: T) {
        this.currentData = e;
    }

    public validate(): Promise<string[]> {
        return AppContainer.schemaValidatorProvider.validate(this.currentData, this.schema);
    }
}
