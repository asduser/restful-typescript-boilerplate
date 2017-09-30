// base
export {BaseModel} from "./base";

// population
export {Gender} from "./population";

// user
export {UserModel} from "./user";
import {UserModel} from "./user";

const u1 = new UserModel({name: 'Bob', age: 14, gender: 1});

u1.validate()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
