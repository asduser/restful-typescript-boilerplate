import {ExpressErrorMiddlewareInterface, Middleware} from "routing-controllers";

@Middleware({ type: "after" })
export class BlogErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next?: Function): void {
        console.log("Error handled on blog handler: ", error);
        next(error);
    }
    
}