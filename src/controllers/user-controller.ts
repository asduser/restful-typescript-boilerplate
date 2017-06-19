import {Request, Response} from "express";
import {UserRepository} from "../repositories/user-repository";
import {User, IUser} from "../models/app/user";
import {HttpError} from "../models/errors/http-error";
import {UserService} from "../services/data/user-service";
import {SuccessResponse} from "../models/response/success";
import {ErrorResponse} from "../models/response/error";

import {
    Controller, Put, Post, Delete, Get, Res, Req, RouteError, ErrorHandler, Header, Cookie,
    RequiredParameterNotProvidedError, ParameterParseError, HttpVerbNotSupportedError, Query, UrlParam, Body, isString, isNumber
} from 'giuseppe';

@Controller("/users")
export class UserController {

    private _userRepository: UserRepository<IUser>;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository<IUser>();
        this._userService = new UserService();
    }

    @Get()
    public async getAll(@Req() request: Request, @Res() response: Response){
        try {
            let users = await this._userService.getUsers();
            let result = new SuccessResponse(users);
            response.json(result);
        } catch (e) {
            response.json(e);
        }
    }

    @Get("/olo")
    getAll4(@Req() request: Request, @Res() response: Response){
        return response.json(100);
    }

    @Get("/multiple")
    getAll5(@Query('number', {required: true, validator: isNumber()}) queryNumber: number, @Header('test') lang: string = 'de', @Req() request: Request, @Res() response: Response){
        return response.json(queryNumber * 10);
    }

    @Post("/")
    //async create(@Body({required: true}) user: User, @Req() request: Request, @Res() response: Response){
    create(@Req() request: Request, @Res() response: Response){
        return this._userService.create(request.body).then((result) => {
                //response.statusCode = result.status;
                //console.log(`Status: ${response.statusCode}`);
                response.json(result);
            }, () => null).catch(() => null);
    }

    @Get("/:id")
    getOne(@Req() request: Request, @Res() response: Response, @UrlParam('id') id){
        return this._userService.getUserById(id).then((user) => {
            let result = new SuccessResponse(user);
            response.json(result);
        }, () => {
            response.json('Not found');
        });
        // response.json(100);
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

    @ErrorHandler()
    public err(req: Request, res: Response, err: Error): void {
        console.error(err);
        res.status(500).json({err});
    }

    @ErrorHandler(RequiredParameterNotProvidedError)
    public badReq1(request: Request, response: Response, error: RequiredParameterNotProvidedError) {
        throw new HttpError(400,error.message);
    }

}