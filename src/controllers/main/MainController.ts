import {Request, Response} from "express";
import {Controller, Req, Res, Get, UseBefore, Post, Put, Delete, Patch} from "routing-controllers";
import {ResponseModel} from "../../models/response/ResponseModel";

@Controller("/ttt")
/*@UseBefore((request: any, response: any, next: Function) => {
    console.log(response.statusCode);
    let notFound = new ResponseModel(false, null, null, "Router not found.");
    response.send(notFound);
    next();
})*/
export class MainController {

    @Get("*")
    @Post("*")
    @Put("*")
    @Delete("*")
    @Patch("*")
    getAll(@Req() request: Request, @Res() response: Response, next: any) {
        next();
    }

}