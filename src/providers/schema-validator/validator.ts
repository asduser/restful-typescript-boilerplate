import * as Joi from "joi";

const options = {
    abortEarly: false
};

export class SchemaValidatorProvider {

    public validate(value, schema: Joi.Schema): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const { error } = Joi.validate(value, schema, options);
            if (error) {
                const errors = error.details.map((item) => item.message);
                reject(errors);
            } else {
                resolve();
            }
        });
    }

    public async isValid(value, schema: Joi.Schema) {
        try {
            return await this.validate(value, schema);
        } catch (e) {
            return false;
        }
    }

}
