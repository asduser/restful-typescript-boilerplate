export const LoggerMiddleware2 = (request, response, next) => {
    console.log(`2 Middleware`);
    response.status(500).json('Oops');
};