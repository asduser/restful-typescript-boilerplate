import {
    Response, Body, Controller, Get, Post, Delete, Next, Params
} from '@decorators/express';
import {UserService} from "../../services/user/user-service";
import {BaseController} from "../base";
import {HttpSuccess} from "../../http";

@Controller('/test')
export class UsersController extends BaseController {

    constructor(private userService: UserService) {
        super();
    }

    @Get('/users')
    async find(@Response() res, @Next() next) {
        try {
            const users = await this.userService.findAll();
            res.json(new HttpSuccess(users));
        } catch (e) { next(e) }
    }

    @Get('/users/:id')
    async findById(@Params('id') id: string, @Response() res, @Next() next) {
        try {
            const user = await this.userService.findById(id);
            res.json(new HttpSuccess(user));
        } catch (e) { next(e) }
    }

    @Post('/users')
    async create(@Body() user, @Response() res, @Next() next) {
        try {
            const createdUser = await this.userService.create(user);
            res.json(new HttpSuccess(createdUser));
        } catch (e) { next(e) }
    }

    @Delete('/users/:id')
    async removeById(@Params('id') id: string, @Response() res, @Next() next) {
        try {
            const removedUser = await this.userService.removeById(id);
            res.json(new HttpSuccess(removedUser));
        } catch (e) { next(e) }
    }
}
