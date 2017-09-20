import {BaseEntity} from "../base";

export class UserEntity extends BaseEntity {

    constructor() {
        super();
    }

    public getCollection(): string {
        return "users";
    }

}
