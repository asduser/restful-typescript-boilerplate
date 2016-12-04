export const LoggerMiddleware = (request, response, next) => {
    console.log(`1 Middleware`);
    next();
};