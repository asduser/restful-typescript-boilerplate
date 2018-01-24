import {AppContainer} from "../../injectors";

export class BaseModel {
    protected currentData: any;
    protected schema: any;

    constructor(data) {
        if (data == null) {
            throw new Error("Data can't be empty!");
        }
        this.currentData = data;
    }

    public validate() {
        return AppContainer.schemaValidatorProvider.validate(this.currentData, this.schema)
            .then(() => this.currentData);
    }
}
