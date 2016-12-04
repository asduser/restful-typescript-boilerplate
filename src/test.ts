abstract class Test {

    protected status: number;
    protected message: string;

    constructor(message: string) {
        this.message = message;
    }

}

class Test1 extends Test {

    constructor(msg: string){
        super(msg);
        this.status = 200;
    }

    public info = (): string => {
        return `Message: ${this.message}, status: ${this.status}`;
    }

}

let t1_1 = new Test1("sds");
//console.log( t1_1.info() );

const subscribe = () => {
    return function(a, b, c){
        console.log(a, b, c);
    };
    /*let value = null;
    return {
        get: ():any => {
            console.log(`Get: ${value}`);
            return value;
        },
        set: (newVal):void => console.log(`Set: ${value} => ${newVal}`)
    }*/
};

const role = (target: any) => {
    target.role = "admin";
};

@role
class Person {

    info(input?: number): void {
        console.log(this);
    }
}

let p1 = new Person();
p1.info();

import * as A from 'test-module';
console.log( A.add(10,20) );