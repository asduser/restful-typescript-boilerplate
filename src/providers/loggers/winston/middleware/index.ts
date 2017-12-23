const expressWinston = require('express-winston');
import {consoleTransport} from "../transports";

export const loggerMiddleware = expressWinston.logger({
    transports: [
        consoleTransport,
    ]
});
