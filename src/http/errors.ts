import {HttpMessageOptions, HttpMessage} from "./message";

export class BadRequestError extends HttpMessage {
    constructor() {
        super({
            status: 400,
            title: 'Bad Request',
            message: "Request body contains inappropriate data!",
        });
    }
}

export class UnAuthorizedError extends HttpMessage {
    constructor() {
        super({
            status: 401,
            title: 'Unauthorized',
            message: "Please, login.",
        });
    }
}

export class ForbiddenError extends HttpMessage {
    constructor() {
        super({
            status: 403,
            title: 'Forbidden',
            message: "You don't have permissions for this route!",
        });
    }
}

export class NotFoundError extends HttpMessage {
    constructor() {
        super({
            status: 404,
            title: 'Not Found',
            message: 'Resource are you looking for is not found!'
        });
    }
}

export class UnprocessableEntityError extends HttpMessage {
    constructor(errors: string[] = []) {
        super({
            status: 422,
            title: 'Entity Validation Error',
            message: 'Request body has invalid data!',
            errors
        });
    }
}

export class InternalError extends HttpMessage {
    constructor(opts: HttpMessageOptions) {
        super({
            status: opts.status || 500,
            title: opts.title,
            message: opts.message || 'Internal Server Error',
            errors: opts.errors,
            errorCode: opts.errorCode,
        });
    }
}
