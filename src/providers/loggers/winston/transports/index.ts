const winston = require('winston');

const baseTransport = {
    json: true,
    colorize: true,
    level: 'info',
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    exitOnError: false
};

const fileTransport = Object.assign({}, baseTransport, {
    maxsize: 1024000,
    maxFiles: 10
});

export const consoleTransport = new winston.transports.Console(
    Object.assign({}, baseTransport)
);

export const fileInfoTransport = new winston.transports.File(
    Object.assign({}, fileTransport, {
        filename: './logs/info.log',
        name: 'info-logs'
    })
);

export const fileErrorTransport = new winston.transports.File(
    Object.assign({}, fileTransport, {
        filename: './logs/error.log',
        level: 'error',
        name: 'error-logs'
    })
);