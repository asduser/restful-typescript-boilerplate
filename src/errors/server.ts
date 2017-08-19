abstract class HttpError {
    public status: number;
    public title: string;
    public message: string;
    public errorCode: number;

    constructor(opts: HttErrorOptions = {}) {
        Object.assign(this, opts);
    }
}

export class NotFoundError extends HttpError {
    constructor() {
        super({
            status: 404,
            message: 'Route is not found!'
        });
    }
}

export class InternalError extends HttpError {
    constructor(opts: HttErrorOptions) {
        super({
            status: opts.status || 500,
            message: opts.message || 'Internal Server Error'
        });
    }
}

type HttErrorOptions = {
    status?: number,
    message?: string,
    title?: string,
    errorCode?: number
}