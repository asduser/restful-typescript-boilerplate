import {ExpressMiddlewareInterface} from "routing-controllers";

export class BlogMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next?: Function): any {
        console.log("logging request from blog middleware...");
        next("ERROR IN BLOG MIDDLEWARE");
    }
    
}