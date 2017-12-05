import {schemaValidatorProvider} from "../../providers/index";

export class BaseModel {
    protected currentData: any;
    protected schema: any;

    public validate() {
        return schemaValidatorProvider.validate(this.currentData, this.schema)
            .then(() => this.currentData);
    }
}
