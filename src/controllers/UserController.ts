import {Request, Response} from "express";
import {JsonController, QueryParam, UseInterceptor, Controller, UseBefore, UseAfter} from "routing-controllers";
import {Body, Req, Res, Param} from "routing-controllers";
import {Get, Post, Put} from "routing-controllers";
//let User = require("../models/User");
import {UserRepository} from "../repositories/UserRepository";
import {User} from "../models/User";
import {HttpError} from "routing-controllers/error/http/HttpError";
import {UserService} from "../services/UserService";
import {SuccessResponse} from "../models/response/SuccessResponse";

@Controller("/users")
export class UserController {

    private _userRepository: UserRepository;
    private _userService: UserService;

    constructor(){
        this._userRepository = new UserRepository();
        this._userService = new UserService();
    }

    @Get("/")
    async getAll(@Req() request: Request, @Res() response: Response){
        await this._userService.getUsers().then((users) => {
                let result = new SuccessResponse(users);
                response.json(result);
            });
    }

    @Post("/")
    //async create(@Body({required: true}) user: User, @Req() request: Request, @Res() response: Response){
    async create(@Req() request: Request, @Res() response: Response){
        await this._userService.create(request.body).then((result) => {
                //response.statusCode = result.status;
                //console.log(`Status: ${response.statusCode}`);
                response.json(result);
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

    @Get("/test")
    async sortBy(@QueryParam("sort") sortDirection: number, @Req() request: Request, @Res() response: Response) {
        let direction: number = sortDirection == 1 ? -1 : 1;
        let result = await this._userService
            .test({name: direction})
            .exec((err, data) => {
                let users = data.map((u) => new User(u['name'], u['age']));
                response.json(users);
            });
    }

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

    @Get("/t")
    test1(@Req() request: Request, @Res() response: Response, next: any){
        throw new HttpError(400, "Incorrect email or password!");
    }

}