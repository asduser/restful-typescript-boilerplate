import { IController, ExpressParams } from "@app/core";

export abstract class BaseController implements IController {

    /**
     * Execute received promise and resolve data from API or
     * send wrapped JSON-error if caught an exception.
     *
     * @param {e.Response} res - Express.js response object
     * @param {e.Request} req - Express.js request object
     * @param {e.NextFunction} next - Express.js next function
     * @param {Promise<T>} promise - Promise to execute query and resolve API-request
     * @returns {void}
     */
    public handle<T = any>({ req, res, next }: ExpressParams, promise: Promise<T>): void {
        promise
            .then((data) => res.json(data))
            .catch(next);
    }

}
