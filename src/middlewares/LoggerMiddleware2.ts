export const LoggerMiddleware2 = (request, response, next) => {
    console.log(`2 Middleware`);
    next();
};