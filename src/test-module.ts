namespace MyLib {
    export const add = (...args) => { return args.reduce((a,b) => a + b)};
}

declare module 'myLib' {
    export = MyLib;
}