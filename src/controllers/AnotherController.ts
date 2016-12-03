import {Request, Response} from "express";
import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body
} from 'giuseppe';
import {UserRepository} from "../repositories/UserRepository";
import {UserService} from "../services/UserService";
import {HttpError} from "../models/errors/HttpError";

@Controller("test")
export class AnotherController {

    private _userRepository: UserRepository;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository();
        this._userService = new UserService();
    }

    @Get()
    getAll(@Req() request: Request, @Res() response: Response){
        return response.json("all");
    }

    @Get('a')
    getA(@Req() request: Request, @Res() response: Response){
        return response.json(1);
    }

    @Get('count')
    count(@Req() request: Request, @Res() response: Response, @Query('number', {required: true}) queryNumber){
        return response.json(queryNumber * 10);
    }

    @Get('z')
    getZ(@Req() request: Request, @Res() response: Response){
        return response.json('z');
    }

    @Get(':id')
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: number){
        console.log(id, typeof id);
        if (typeof id != "number" || isNaN(id)) { throw new ParameterParseError('id', new Error("iddd")) }
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

    @ErrorHandler(RequiredParameterNotProvidedError)
    public badReq1(request: Request, response: Response, error: RequiredParameterNotProvidedError): void {
        //response.status(400).json(error.message);
        throw new HttpError(400,error.message);
    }

    @ErrorHandler(ParameterParseError)
    public badReq2(request: Request, response: Response, error: ParameterParseError): void {
        //response.status(400).json(error.message);
        throw new HttpError(400,error.message);
    }

}