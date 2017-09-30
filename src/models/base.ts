import {ObjectSchema} from "../schemas";
import {schemaValidatorProvider} from "../providers";

export abstract class BaseModel<IModel> {
    private model: IModel;
    protected schema: ObjectSchema;

    constructor(m?: IModel) {
        this.model = m;
    }

    public validate() {
        return schemaValidatorProvider.validate(this.model, this.schema);
    }
}
