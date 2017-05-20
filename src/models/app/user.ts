export interface IUser {
    name: string;
    age: number;
}

export class User implements IUser{

    public name: string;
    public age: number;
    
    constructor(data: Object = {}) {
        Object.assign(this, data);
    }
}