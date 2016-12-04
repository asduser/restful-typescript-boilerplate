import {Request, Response} from "express";
import {UserRepository} from "../repositories/UserRepository";
import {HttpError} from "../models/errors/HttpError";
import {UserService} from "../services/UserService";
import {SuccessResponse} from "../models/response/SuccessResponse";

/*import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body
} from 'giuseppe';*/

import {Controller, BadRequestError, BodyParam, Body, Req, Res, QueryParam, Param} from "routing-controllers";
import {Get, Post, Put, Delete, Patch} from "routing-controllers";

@Controller("/users")
export class UserController {

    private _userRepository: UserRepository;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository();
        this._userService = new UserService();
    }

    @Get('/')
    a1(@Req() request: Request, @Res() response: Response) {
        return response.json('all');
    }

    @Get('/:id')
    a2(@Req() request: Request, @Res() response: Response, @Param("id") id: number) {
        return response.json(`${id}`);
    }

    @Get('/a')
    a3(@Req() request: Request, @Res() response: Response) {
        return response.json('a');
    }

    @Get('/add')
    a4(@Req() request: Request, @Res() response: Response, @QueryParam('a', {required: true}) a: number, @QueryParam('b', {required: true}) b: number) {
        return response.json(a + b);
    }

    /*
    @Get("/")
    getAll2(@Req() request: Request, @Res() response: Response){
        return this._userService.getUsers().then((users) => {
            let result = new SuccessResponse(users);
            response.json(result);
        });
    }

    @Get("/olo")
    getAll4(@Req() request: Request, @Res() response: Response){
        return response.json(this._userService.test1());
    }

    @Get("/multiple")
    getAll5(@Req() request: Request, @Res() response: Response, @Query('number', {required: true}) queryNumber, @Header('test') lang: string = 'de'){
        console.log(lang);
        return response.json(queryNumber * 10);
    }

    @Post("/")
    //async create(@Body({required: true}) user: User, @Req() request: Request, @Res() response: Response){
    create(@Req() request: Request, @Res() response: Response){
        return response.json(`post`);
    }

    @Get("/:id")
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id){
        return this._userService.getUserById(id).then((user) => {
            let result = new SuccessResponse(user);
            response.json(result);
        });
    }

    @Put("/:id")
    updateById(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: string) {
        return response.json(`${id} put`);
    }

    @Delete('/:id')
    removeById(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: string) {
        return response.json(`${id} delete`);
    }

    @ErrorHandler(RequiredParameterNotProvidedError)
    public badReq1(request: Request, response: Response, error: RequiredParameterNotProvidedError): void {
        throw new HttpError(400,error.message);
    }*/

}