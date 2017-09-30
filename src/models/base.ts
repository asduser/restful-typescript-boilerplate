import {ObjectSchema} from "../schemas";
import {schemaValidatorProvider} from "../providers";
import {IEntity} from "../entities/base";

export abstract class BaseModel<T extends IEntity> {
    private entity: T;
    protected schema: ObjectSchema;

    constructor(e?: T) {
        this.entity = e;
    }

    public validate() {
        return schemaValidatorProvider.validate(this.entity, this.schema);
    }
}
