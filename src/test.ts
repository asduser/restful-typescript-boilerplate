class Sing {

    public static _instance: Sing;
    public counter: number = 0;

    constructor(){
        if (Sing._instance) {
            console.log("Instance created. Use getInstance instead.");
        }
        Sing._instance = this;
    }

    public static getInstance(): Sing {
        return Sing._instance;
    }

    public inc(): void {
        this.counter++;
    }
}

let t1 = new Sing();
t1.inc();
console.log(t1.counter);
let t2 = new Sing();
console.log(t1.counter);