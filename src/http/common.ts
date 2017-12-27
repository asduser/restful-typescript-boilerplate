import { HttpMessage } from "./message";
import { HttpStatus } from "./status";

export class HttpSuccess extends HttpMessage {
    constructor(data = null) {
        super();
        this.status = HttpStatus.OK;
        this.data = data;
    }
}

export class HttpCreated extends HttpMessage {
    constructor(data = null) {
        super();
        this.status = HttpStatus.CREATED;
        this.data = data;
        this.title = 'Successfully created!';
    }
}
