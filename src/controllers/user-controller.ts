import {Request, Response} from "express";
import {UserRepository} from "../repositories/UserRepository";
import {User, IUser} from "../models/User";
import {HttpError} from "../models/errors/HttpError";
import {UserService} from "../services/UserService";
import {SuccessResponse} from "../models/response/SuccessResponse";

import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body
} from 'giuseppe';

@Controller("/users")
export class UserController {

    private _userRepository: UserRepository;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository();
        this._userService = new UserService();
    }

    @Get("/")
    /*getAll2(@Req() request: Request, @Res() response: Response){
        return this._userService.getUsers().then((users) => {
                let result = new SuccessResponse(users);
                response.json(result);
            });
    }*/
    public async getAll2(@Req() request: Request, @Res() response: Response){
        let users = await this._userService.getUsers();
        let result = new SuccessResponse(users);
        response.json(result);
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
        return this._userService.create(request.body).then((result) => {
                //response.statusCode = result.status;
                //console.log(`Status: ${response.statusCode}`);
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

    @ErrorHandler(RequiredParameterNotProvidedError)
    public badReq1(request: Request, response: Response, error: RequiredParameterNotProvidedError): void {
        throw new HttpError(400,error.message);
    }

}