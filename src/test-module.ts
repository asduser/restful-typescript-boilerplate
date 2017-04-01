namespace MyLib {
    export const add = (...args) => { return args.reduce((a,b) => a + b)};
}

export declare module 'myLib' {
    export = {
        MyLib
    };
}