import {BaseEntity} from "../base";

export class UserEntity extends BaseEntity {

    constructor() {
        super();
    }

    public getCollection(): string {
        return "users";
    }

}

const u1 = new UserEntity();
console.log( u1.test() );