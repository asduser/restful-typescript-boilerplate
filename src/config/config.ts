export const config = {
    host: process.env.API_HOST || 'localhost',
    port: process.env.API_PORT || 3001,
    jwt: {
       secret_key: 'secret_key_goes_here'
    },
    mongodb: {
        host: process.env.MONGO_HOST || 'localhost',
        port: process.env.MONGO_PORT || 27017,
        db: process.env.MONGO_DB || 'express-simple-api'
    }
};