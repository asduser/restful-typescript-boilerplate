declare module '@app/loggers' {

    export interface IAppLogger {
        info(message: string | object, params?: string | object);
        warn(message: string | object, params?: string | object);
        error(message: string | object, params?: string | object);
        debug(message: string | object, params?: string | object);
    }

}
