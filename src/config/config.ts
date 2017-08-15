const dotenv = require('dotenv');
dotenv.config();

type AppConfig = {
  port: number,
  host: string
}

let _config: AppConfig;

if (process.env.NODE_ENV === 'production') {
    _config = {
        port: 3002,
        host: 'localhost'
    };
} else {
    _config = {
        port: 3001,
        host: 'localhost'
    };
}

export const config = _config;