import "es6-shim";
import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import * as path from "path";

export class Server {
    private number: number;    
    constructor(num: number = null){
        this.number = num;
        if (!this.number) {
            throw new CustomError("A", "KKK");            
        } else {
            console.log(this.number);
        }
    }
}

class CustomError implements Error {
    constructor(public name: string, public message:string){}
}