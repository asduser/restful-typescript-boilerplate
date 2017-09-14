const expressWinston = require('express-winston');
import {consoleTransport, fileInfoTransport} from "../transports";

export const loggerMiddleware = expressWinston.logger({
    transports: [
        consoleTransport,
        fileInfoTransport
    ]
});
