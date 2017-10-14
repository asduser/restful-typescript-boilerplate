import {IHttpMessage,IHttpMessageDetails} from "@app/core";
import {HttpMessage} from "./message";

export class BadRequestError extends HttpMessage {
    constructor(details?: IHttpMessageDetails) {
        const error = Object.assign({
            status: 400,
            title: 'Bad Request',
            message: "Request body contains inappropriate data!",
        }, details);
        super(error);
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
    constructor(details?: IHttpMessageDetails) {
        const error = Object.assign({
            status: 404,
            title: 'Not Found',
            message: 'Resource are you looking for is not found!'
        }, details);
        super(error);
    }
}

export class UnprocessableError extends HttpMessage {
    constructor(errors: string[] = []) {
        super({
            status: 422,
            title: 'Unprocessable Error',
            message: 'Request body has invalid data!',
            errors
        });
    }
}

export class InternalError extends HttpMessage {
    constructor(details: IHttpMessage) {
        const error = {
            status: 500,
            title: 'Internal Server Error',
            message: details.message || 'Server problems. Please, try again later.',
        };
        super(error);
    }
}

export class DbError extends InternalError {
    constructor(details: IHttpMessage) {
        const error = Object.assign({
            title: 'Database Error'
        }, details);
        super(error);
    }
}
