const expressWinston = require('express-winston');
import {consoleTransport, fileErrorTransport, fileInfoTransport} from "../transports";

export const loggerMiddleware = expressWinston.logger({
    transports: [
        consoleTransport,
        fileErrorTransport,
        fileInfoTransport
    ]
});