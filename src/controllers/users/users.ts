import {
    Response, Body, Controller, Get, Post, Next
} from '@decorators/express';
import {UserService} from "../../services/user/user-service";
import {BaseController} from "../base";

@Controller('/test')
export class UsersController extends BaseController {

    private userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    @Get('/users')
    find(@Response() res, @Next() next) {
        this.handle({res, next }, this.userService.findAll());
    }

    @Post('/users')
    create(@Body() user, @Response() res, @Next() next) {
        this.handle({res, next }, this.userService.create(user));
    }
}
