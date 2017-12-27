import {IHttpMessage} from "@app/core";
import * as _ from "lodash";

export class HttpMessage {
    public status: number = 200;
    public title: string = null;
    public message: string = null;
    public errors: string[] = [];
    public code: number = null;
    public data: any = null;

    public toJSON() {
        return _.omit(this, 'status');
    }
}
