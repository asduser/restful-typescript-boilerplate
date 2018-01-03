import { IHttpMessage, IHttpMessageDetails } from "@app/core";
import { HttpMessage } from "./message";
import { HttpStatus } from "./status";
import * as _ from "lodash";

export class BadRequestError extends HttpMessage {
    constructor(details?: IHttpMessageDetails) {
        super();
        this.status = HttpStatus.BAD_REQUEST;
        this.title = details.title || 'Bad Request';
        this.message = details.message || 'Request body contains inappropriate data!';
    }
}

export class UnAuthorizedError extends HttpMessage {
    constructor() {
        super();
        this.status = HttpStatus.UNAUTHORIZED;
        this.title = 'Unauthorized';
        this.message = 'Please, login!';
    }
}

export class ForbiddenError extends HttpMessage {
    constructor() {
        super();
        this.status = HttpStatus.FORBIDDEN;
        this.title = 'Forbidden';
        this.message = 'You don\'t have permissions for this route!';
    }
}

export class NotFoundError extends HttpMessage {
    constructor(details?: IHttpMessageDetails) {
        super();
        this.status = HttpStatus.NOT_FOUND;
        this.title = details.title || 'Not Found';
        this.message = details.message || 'Resource are you looking for is not found!';
    }
}

export class UnprocessableError extends HttpMessage {
    constructor(err) {
        super();
        this.status = HttpStatus.UNPROCESSABLE_ENTITY;
        this.title = 'Unprocessable Error';
        this.message = 'Request body has invalid data!';
        this.errors = _.isArray(err) ? err : [err];
    }
}

export class InternalError extends HttpMessage {
    constructor(details: IHttpMessage) {
        super();
        this.status = HttpStatus.INTERNAL_SERVER_ERROR;
        this.title = 'Internal Server Error';
        this.message = details.message || 'Server problems. Please, try again later.';
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
