export class HttpMessage {
    public status: number = 200;
    public title: string = null;
    public message: string = null;
    public errors: string[] = [];
    public errorCode: number = null;
    public data: any = null;

    constructor(opts: HttpMessageOptions = {}) {
        Object.assign(this, opts);
    }
}

export interface HttpMessageOptions {
    status?: number;
    title?: string;
    message?: string;
    errors?: string[];
    errorCode?: number;
    data?: any;
}
