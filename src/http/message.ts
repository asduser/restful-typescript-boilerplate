import {IHttpMessage} from "@app/core";

export class HttpMessage {
    public status: number = 200;
    public title: string = null;
    public message: string = null;
    public errors: string[] = [];
    public code: number = null;
    public data: any = null;

    constructor(opts: IHttpMessage = {}) {
        Object.assign(this, opts);
    }
}
