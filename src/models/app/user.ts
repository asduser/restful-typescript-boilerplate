export interface IUser {
    name: string;
    age: number;
}

export class User implements IUser{
    public name: string;
    public age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}