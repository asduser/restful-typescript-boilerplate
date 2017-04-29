import {Request, Response} from "express";
import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body, isNumber
} from 'giuseppe';
import {UserService} from "../services/user-service";
import {HttpError} from "../models/errors/http-error";

import {LoggerMiddleware, LoggerMiddleware2} from "../middlewares/all";
import {BaseController} from "./base-controller";

@Controller("test", LoggerMiddleware)
export class AnotherController extends BaseController {

    private _userService: UserService;

    constructor(){
        super();
        this._userService = new UserService();
    }

    @Get("")
    getAll(@Req() request: Request, @Res() response: Response){
        return response.json("all");
    }

    @Get('/a')
    getA(@Req() request: Request, @Res() response: Response){
        return response.json(1);
    }

    @Get('/count')
    count(@Req() request: Request, @Res() response: Response, @Query('number', {required: true}) queryNumber){
        return response.json(queryNumber * 10);
    }

    @Get('/z')
    getZ(@Req() request: Request, @Res() response: Response){
        return response.json('z');
    }

    @Get('/error')
    get3(@Req() request: Request, @Res() response: Response){
        throw new HttpError(500, "Custom error.");
    }

    @Get('/some')
    testSome(@Req() request: Request, @Res() response: Response): HttpError {
        response.send(500, 'Oops');
        return new HttpError(400,'Oops');
    }

    /*@Get('/:id')
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        console.log(id, typeof id, request.params.id);
        console.log(request.route.path);
        if (typeof id != typeof request.params.id) throw new HttpError(500, "Custom error.");
        return response.json(`This is ${id}`);
    }*/

    @Get(':id/info')
    get1(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        return response.json(`Info ${id}`);
    }

    @Get(':id/books')
    get2(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        return response.json(`Books ${id}`);
    }

}