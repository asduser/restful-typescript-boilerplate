import {HttpMessageOptions, HttpMessage} from "./message";

export class BadRequestError extends HttpMessage {
    constructor() {
        super({
            status: 400,
            message: "Request body contains inappropriate data!",
            title: 'Bad Request'
        });
    }
}

export class UnAuthorizedError extends HttpMessage {
    constructor() {
        super({
            status: 401,
            message: "Please, login to continue.",
            title: 'Authorized'
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

export class NotFoundError extends HttpMessage {
    constructor() {
        super({
            status: 404,
            message: 'Not found!'
        });
    }
}

export class UnprocessableEntityError extends HttpMessage {
    constructor(errors: string[] = []) {
        super({
            status: 422,
            message: 'Request body has invalid data!',
            errors
        });
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
