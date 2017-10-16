import { IMongoDBRepository } from "@app/core";
import { UserService } from "../../services/user/user-service";
import { IUserEntity } from "../../entities";

/**
 * Application injected items.
 * Contains all registered factories, classes, singletones etc.
 */
export class AppInjectedItems {
    public userService: UserService;
    public userRepository: IMongoDBRepository<IUserEntity>;
}
