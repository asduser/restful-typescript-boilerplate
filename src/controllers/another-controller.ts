import {Request, Response} from "express";
import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body, isNumber
} from 'giuseppe';
import {UserRepository} from "../repositories/user-repository";
import {UserService} from "../services/user-service";
import {HttpError} from "../models/errors/http-error";

import {LoggerMiddleware, LoggerMiddleware2} from "../middlewares/all";

@Controller("test", LoggerMiddleware)
export class AnotherController {

    private _userRepository: UserRepository;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository();
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
        return response.send(queryNumber * 10);
    }

    @Get('/z')
    getZ(@Req() request: Request, @Res() response: Response){
        return response.json('z');
    }

    @Get('/error')
    get3(@Req() request: Request, @Res() response: Response){
        // throw new Error("Custom error.");
        throw new HttpError(500, "Custom error.");
    }

    @Get('/some')
    testSome(@Req() request: Request, @Res() response: Response): HttpError {
        response.send(500, 'Oops');
        return new HttpError(400,'Oops');
    }

    @Get('/:id')
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        console.log(id, typeof id);
        //console.log(request);
        console.log(request.route.path);
        //if (typeof id != "number" || isNaN(id)) { throw new ParameterParseError('id', new Error("iddd")) }
        //if (isNaN(id)) { throw new HttpError(400, "Custom.") }
        return response.json(`This is ${id}`);
    }

    @Get(':id/info')
    get1(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        return response.json(`Info ${id}`);
    }

    @Get(':id/books')
    get2(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        return response.json(`Books ${id}`);
    }

    /*@ErrorHandler()
    public err(req: Request, res: Response, err: Error): void {
        res.status(500).send(new HttpError(500, JSON.stringify(err.message)));
    }*/

    @ErrorHandler(RequiredParameterNotProvidedError, ParameterParseError)
    public badReq(request: Request, response: Response, error: RequiredParameterNotProvidedError|ParameterParseError): void {
        console.log('This is a bad request from the client.');
        console.log(error);
        response.send(400, error.message || error);
    }

}