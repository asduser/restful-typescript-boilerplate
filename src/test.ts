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
console.log( t1_1.info() );