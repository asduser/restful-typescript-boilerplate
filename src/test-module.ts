declare module A {

    const add = (...args) => { return args.reduce((a,b) => a + b)};
    
}

export = A;