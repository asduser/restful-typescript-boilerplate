import * as Joi from "joi";

const options = {
    abortEarly: false
};

export class SchemaValidatorProvider {

    /**
     * Check if entity is valid by using the joi-schema.
     * @param {object} value Entity for validation.
     * @param {Joi.Schema} schema Validation joi-schema.
     * @returns {Promise<string[]>}
     */
    public validate(value, schema: Joi.Schema): Promise<string[]> {
        return new Promise<any>((resolve, reject) => {
            if (!value) {
                reject(['Entity cannot be null or undefined!']);
            }
            const { error } = Joi.validate(value, schema, options);
            if (error) {
                const errors = error.details.map((item) => item.message);
                reject(errors);
            } else {
                resolve([]);
            }
        });
    }

    /**
     * Return true if entity validation passed.
     * @param {object} value Entity for validation.
     * @param {Joi.Schema} schema Validation joi-schema.
     * @returns {Promise<boolean>}
     */
    public async isValid(value, schema: Joi.Schema): Promise<boolean> {
        try {
            await this.validate(value, schema);
            return true;
        } catch (e) {
            return false;
        }
    }

}
