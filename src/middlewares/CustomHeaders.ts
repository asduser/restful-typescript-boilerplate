import {Middleware, MiddlewareInterface, MiddlewareGlobalAfter} from "routing-controllers";
import {HttpError} from "routing-controllers/error/http/HttpError";
import {ResponseModel} from "../models/response/ResponseModel";

@Middleware()
export class CustomHeaders implements MiddlewareInterface {

    use(request: any, response: any, next?: (err?: any) => any): any {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('X-Type', '202');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        response.removeHeader("X-Powered-By");
        next();
    }

}