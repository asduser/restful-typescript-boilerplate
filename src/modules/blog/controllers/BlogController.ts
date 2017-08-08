import {Request} from "express";
import {Controller, Put, Patch, Delete, Req, Get, Post, Res} from "routing-controllers";

@Controller('/blogs')
export class BlogController {

    @Get()
    async getAll(@Res() response) {
        console.log("Getting blogs...");
        this.createPromise([
            { id: 1, name: "Blog 1!"},
            { id: 2, name: "Blog 2!"},
        ], 3000);
    }

    @Get()
    test(): number {
        return 100;
    }

    @Get(":id")
    getOne() {
        return this.createPromise({ id: 1, name: "Blog 1!"}, 3000);
    }

    @Post()
    post(@Req() request: Request) {
        let blog = JSON.stringify(request.body);
        return this.createPromise("Blog " + blog + " !saved!", 3000);
    }

    @Put(":id")
    put(@Req() request: Request) {
        return this.createPromise("Blog #" + request.params.id + " has been putted!", 3000);
    }

    @Patch(":id")
    patch(@Req() request: Request) {
        return this.createPromise("Blog #" + request.params.id + " has been patched!", 3000);
    }

    @Delete(":id")
    remove(@Req() request: Request) {
        return this.createPromise("Blog #" + request.params.id + " has been removed!", 3000);
    }

    private createPromise(data: any, timeout: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => resolve(data), timeout);
        });
    }

}