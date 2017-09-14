abstract class HttpMessage {
    public status: number;
    public title: string;
    public message: string;
    public errorCode: number;

    constructor(opts: HttpMessageOptions = {}) {
        Object.assign(this, opts);
    }
}

export class InternalError extends HttpMessage {
    constructor(opts: HttpMessageOptions) {
        super({
            status: opts.status || 500,
            message: opts.message || 'Internal Server Error'
        });
    }
}

export class NotFoundError extends HttpMessage {
    constructor() {
        super({
            status: 404,
            message: 'Route is not found!'
        });
    }
}

export class ForbiddenError extends HttpMessage {
    constructor() {
        super({
            status: 403,
            message: "You don't have permissions for this route!",
            title: 'Forbidden'
        });
    }
}

interface HttpMessageOptions {
    status?: number;
    message?: string;
    title?: string;
    errorCode?: number;
}
