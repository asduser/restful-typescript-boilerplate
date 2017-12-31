import * as Bunyan from "bunyan";
import {pick} from "lodash";

export const serializers = Object.assign({}, Bunyan.stdSerializers, {
    req: (value) => {
        return pick(value, [
            'url', 'method', 'headers', 'query', 'params',
        ]);
    },
    res: (value) => {
        return pick(value, [
            'statusCode', 'responseTime',
        ]);
    },
});
