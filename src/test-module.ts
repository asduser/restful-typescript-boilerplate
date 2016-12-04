declare module A {

    export const add = (...args) => { return args.reduce((a,b) => a + b)};
    
}

export = A;