import {AppContainer} from "../../injectors";

/**
 * Handle when request has been finished.
 * You can bind any formatter here (e.x. response logger).
 * @param req {e.Request}
 * @param res {e.Response}
 * @param next {e.NextFunction}
 */
export const onRequestFinishedMiddleware = (req, res, next) => {
    const startAt = process.hrtime();
    req.on('end', () => {
        const diff = process.hrtime(startAt);
        const ms = diff[1]/1000000;
        const response = Object.assign({}, res, { responseTime: ms });
        AppContainer.logger.info({ req, res: response });
    });
    next();
};
