import {Request, Response} from "express";
import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body, isNumber
} from 'giuseppe';
import {IUser, User} from "../models/app/user";
import {UserService} from "../services/user-service";
import {HttpError} from "../models/errors/http-error";

import {LoggerMiddleware, LoggerMiddleware2} from "../middlewares/all";
import {BaseController} from "./base-controller";

@Controller("test", LoggerMiddleware)
export class AnotherController extends BaseController {

    private _userService: UserService;
    private users: User[] = [
        new User({name: "Bob", age: 20, id: 1}),
        new User({name: "Thomas", age: 31, id: 2})
    ];

    constructor(){
        super();
        this._userService = new UserService();
    }

    @Get("")
    getAll(@Req() request: Request, @Res() response: Response){
        return response.json(this.users);
    }

    @Get('/count')
    count(@Req() request: Request, @Res() response: Response, @Query('number', {required: true}) queryNumber){
        return response.json(queryNumber * 10);
    }

    @Get('/error')
    get3(@Req() request: Request, @Res() response: Response){
        throw new HttpError(500, "Custom error.");
    }

    @Get('/length')
    getA(@Req() request: Request, @Res() response: Response){
        return response.json(this.users.length);
    }

    @Get('/some')
    testSome(@Req() request: Request, @Res() response: Response): HttpError {
        response.send(500, 'Oops');
        return new HttpError(400,'Oops');
    }

    @Get('/z')
    getZ(@Req() request: Request, @Res() response: Response){
        return response.json('z');
    }

    /*@Get('/:id')
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        console.log(id, typeof id, request.params.id);
        console.log(request.route.path);
        if (typeof id != typeof request.params.id) throw new HttpError(500, "Custom error.");
        return response.json(`This is ${id}`);
    }*/

    @Get(':id')
    getById(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        let user = this.users.find(user => user.id == id);
        return response.json(user || "User with specified 'id' is not found.");
    }

    @Get(':id/name')
    getUserName(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        let user = this.users.find(user => user.id == id);
        return response.json(user ? user.name : "User with specified 'id' is not found.");
    }

    @Get(':id/books')
    getUserBooks(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        return response.json(`Books ${id}`);
    }

}