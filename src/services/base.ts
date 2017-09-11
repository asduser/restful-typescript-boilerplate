export abstract class BaseService {

    protected model;

    constructor() {

    }

    protected getModel() {
        if (!this.model) {
            throw new Error(`Model for ${this.constructor.name} doesn't exist!`);
        }
    }

}
