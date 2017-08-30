export const config = {
    port: 3001,
    host: 'localhost',
    jwt: {
       secret_key: 'secret_key_goes_here'
    },
    mongodb: {
        host: 'localhost',
        port: 27017,
        db: 'express-simple-api'
    }
};