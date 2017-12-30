export const config = {
    host: process.env.API_HOST || 'localhost',
    port: process.env.API_PORT || 3001,
    jwt: {
       secret_key: process.env.JWT_SECRET_KEY || 'secret_key_goes_here'
    },
    mongodb: {
        url: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/rest-api',
    }
};
