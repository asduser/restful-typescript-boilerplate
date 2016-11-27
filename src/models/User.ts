export interface IUserRequestModel {
    name: string;
    age: number;
}

export class User {
    public name: string;
    public age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}