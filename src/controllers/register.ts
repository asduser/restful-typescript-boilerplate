import {Express} from 'express';
import {attachControllers} from "@decorators/express";
import {AppContainer} from "../injectors";
import {UsersController} from "./users";
import {InfoController} from "./info";

/**
 * Register all controllers with routes into the current application scope.
 * Works only with decorated @Controller.
 * @param {e.Express} app Application instance
 */
export const registerControllers = (app: Express) => {
    attachControllers(app, [
        { provide: UsersController, deps: [ AppContainer.userService ] },
        { provide: InfoController, deps: [] }
    ]);
};
