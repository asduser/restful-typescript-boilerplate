import {RouterManager} from "./router-register";

export function Middleware_(middlewares:Array<Function>) {
    return function (object:any, methodName?:string) {
        RouterManager.addMiddleware(object, methodName, middlewares);
    }
}

export function Controller_(path?:string) {
    return function (object:any) {
        RouterManager.addController(object, path);
    }
}

export function Get_(path:string = '') {
    return function (object:any, methodName:string) {
        RouterManager.addAction(object, methodName, 'get', path);
    }
}

export function Post_(path:string = '') {
    return function (object:any, methodName:string) {
        RouterManager.addAction(object, methodName, 'post', path);
    }
}

export function Delete_(path:string = '') {
    return function (object:any, methodName:string) {
        RouterManager.addAction(object, methodName, 'delete', path);
    }
}

export function Put_(path:string = '') {
    return function (object:any, methodName:string) {
        RouterManager.addAction(object, methodName, 'put', path);
    }
}

export function Patch_(path:string = '') {
    return function (object:any, methodName:string) {
        RouterManager.addAction(object, methodName, 'patch', path);
    }
}