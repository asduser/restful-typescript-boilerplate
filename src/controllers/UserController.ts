import {Request, Response} from "express";
/*import {
    JsonController, QueryParam, UseInterceptor, UseBefore, UseAfter,
    MethodNotAllowedError, Method, EmptyResultCode, NullResultCode, UndefinedResultCode, Controller
} from "routing-controllers";*/
//import {Body, Req, Res, Param} from "routing-controllers";
//import {Get, Post, Put} from "routing-controllers";
//let User = require("../models/User");
import {UserRepository} from "../repositories/UserRepository";
import {User, IUser} from "../models/User";
import {HttpError} from "../models/errors/HttpError";
import {UserService} from "../services/UserService";
import {SuccessResponse} from "../models/response/SuccessResponse";

import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body
} from 'giuseppe';
import {BodyRequiredError} from "routing-controllers/error/BodyRequiredError";

@Controller("/users")
export class UserController {

    private _userRepository: UserRepository;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository();
        this._userService = new UserService();
    }

    @Get("/")
    getAll(@Req() request: Request, @Res() response: Response){
        return this._userService.getUsers().then((users) => {
                let result = new SuccessResponse(users);
                response.json(result);
            });
    }

    @Get("/:id")
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id){
        return this._userService.getUserById(id).then((user) => {
            let result = new SuccessResponse(user);
            response.json(result);
        });
    }

    @Post("/")
    //async create(@Body({required: true}) user: User, @Req() request: Request, @Res() response: Response){
    create(@Req() request: Request, @Res() response: Response){
        return this._userService.create(request.body).then((result) => {
                //response.statusCode = result.status;
                //console.log(`Status: ${response.statusCode}`);
                response.json(result);
            });
    }

    @Put("/:id")
    updateById(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: string, @Body({required: true}) user: IUser) {        
        return this._userService.updateById(id, user).then((res: any) => {
            response.json(res);
        });
    }
    
    @Delete('/:id')
    removeById(@Req() request: Request, @Res() response: Response, @UrlParam('id') id: string) {
        return this._userService.removeById(id).then((res: any) => {
            response.json(res);
        });
    }

    /*@Put("/:id")
    async update(@Param("id") id: number, @Body() user: User, @Req() request: Request, @Res() response: Response){
        if (!id) { return new HttpError(403, "Id parameter is not defined.") }
        await this._userRepository
            .update(id)
            .then((result) => {
                response.status(200).json(result);
            });
    }*/

    /*@Get("/test")
    sortBy(@QueryParam("sort") sortDirection: number, request: Request, response: Response) {
        let direction: number = sortDirection == 1 ? -1 : 1;
        return this._userService
            .test({name: direction})
            .exec((err, data) => {
                let users = data.map((u) => new User(u['name'], u['age']));
                response.json(users);
            });
    }*/

    /*@Get("/test")
    async sortBy(@QueryParam("sort") sortDirection: number, @Req() request: Request, @Res() response: Response) {
        await this._userService
            .sortBy(sortDirection)
            .then((result) => {
                response.json(result);
            });
    }*/

    /*@Get("/")
    @Header("Test", "20")
    async getAll(@Req() request: Request, @Res() response: Response) {
        await User.find({}, function(err, users){
            response.status(200).json(users).end();
        });
    }*/

    /*async getAll(@Req() request: Request, @Res() response: Response) {
        let users = await User.find({"name": "Bob"});
        return users;
    }*/

    /*@Get("/t")
    @NullResultCode(405)
    @UndefinedResultCode(405)
    test1(request: Request, response: Response, next: any){
        throw new HttpError(400, "Incorrect email or password!");
    }*/

    /*@ErrorHandler()
    public errorHandler(request: Request, response: Response, error: Error): void {
        console.log('Oh noes!');
        response.status(500).end();
    }*/

    @Get('/t')
    t(@Req() request: Request, @Res() response: Response, @Query('number', {required: true}) queryNumber, @Header('test') lang: string = 'de'){
        console.log(lang);
        response.json(queryNumber * 10);
    }

    /*@ErrorHandler(HttpVerbNotSupportedError)
    @Put('/s')
    public badReq(@Req()request: Request, @Res() response: Response, error: HttpVerbNotSupportedError): void {
        console.log('405.');
        response.status(405).end(405);
    }*/

    @ErrorHandler(RequiredParameterNotProvidedError)
    public badReq1(request: Request, response: Response, error: RequiredParameterNotProvidedError): void {
        //response.status(400).json(error.message);
        throw new HttpError(400,error.message);
    }

    @ErrorHandler(HttpVerbNotSupportedError)
    public badReq2(request: Request, response: Response, error: HttpVerbNotSupportedError): void {
        response.status(405).json(decodeURI(error.message));
    }

}

function test() {
    return (target, methodName, descriptor) => {
        console.log(target);
        console.log(methodName);
        console.log(descriptor);
    };
}

function Entity() {
    return function(target) {
        let instance = new target();
        console.log(instance);
    }
}