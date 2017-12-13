import {AppContainer} from "../../injectors";

export class BaseModel {
    protected currentData: any;
    protected schema: any;

    public validate() {
        return AppContainer.schemaValidatorProvider.validate(this.currentData, this.schema)
            .then(() => this.currentData);
    }
}
