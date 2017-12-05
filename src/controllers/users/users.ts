import {
    Response, Body, Controller, Get, Post, Delete, Next, Params
} from '@decorators/express';
import {UserService} from "../../services/user/user-service";
import {BaseController} from "../base";

@Controller('/test')
export class UsersController extends BaseController {

    constructor(private userService: UserService) {
        super();
    }

    @Get('/users')
    find(@Response() res, @Next() next) {
        return this.handle({res, next }, this.userService.findAll());
    }

    @Get('/users/:id')
    findById(@Params('id') id: string, @Response() res, @Next() next) {
        return this.handle({res, next }, this.userService.findById(id));
    }

    @Post('/users')
    create(@Body() user, @Response() res, @Next() next) {
        return this.handle({res, next }, this.userService.create(user));
    }

    @Delete('/users/:id')
    removeById(@Params('id') id: string, @Response() res, @Next() next) {
        return this.handle({res, next }, this.userService.removeById(id));
    }
}
