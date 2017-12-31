import { IAppLogger } from "@app/core";
import * as Bunyan from "bunyan";
import { serializers } from "./serializers";
import { streams } from "./streams";

export class BunyanLogger implements IAppLogger {

    private logger: Bunyan;

    constructor() {
        this.init();
    }

    public info(message: string | Object, params?: string | Object) {
        this.logger.info(message, params);
    }

    public warn(message: string | Object, params?: string | Object) {
        this.logger.warn(message, params);
    }

    public error(message: string | Object, params?: string | Object) {
        this.logger.error(message, params);
    }

    public debug(message: string | Object, params?: string | Object) {
        this.logger.debug(message, params);
    }

    private init() {
        this.logger = new Bunyan({
            name: 'rest-api',
            streams: streams,
            serializers: serializers,
        });
    }

}
