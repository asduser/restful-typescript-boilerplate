import {
    Response, Controller, Get, Next
} from '@decorators/express';
import {BaseController} from "../base";

@Controller('/info')
export class InfoController extends BaseController {

    constructor() {
        super();
    }

    @Get('/about')
    find(@Response() res, @Next() next) {
        this.handle({res, next }, Promise.resolve({
            version: {
                current: '1.0',
                all: ['1.0']
            },
            type: 'REST Api',
            status: 'ok'
        }));
    }
}
