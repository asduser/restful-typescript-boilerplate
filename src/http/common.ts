import { HttpMessage } from "./message";
import { HttpStatus } from "./status";

export class HttpSuccess extends HttpMessage {
    constructor(data = null) {
        super({
            status: HttpStatus.OK,
            data,
        });
    }
}

export class HttpCreated extends HttpMessage {
    constructor(data = null) {
        super({
            status: HttpStatus.CREATED,
            data,
        });
    }
}
