const expressWinston = require('express-winston');
const winston = require('winston');
import {consoleTransport, fileErrorTransport, fileInfoTransport} from "../transports";

export const loggerMiddleware = expressWinston.logger({
    transports: [
        consoleTransport,
        fileErrorTransport,
        fileInfoTransport
    ]
});

export const errorMiddleware = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
});