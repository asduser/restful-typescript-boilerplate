import {UserService} from "../../services/user/user-service";
import {UserRepository} from "../../repositories/mongodb/user";

/**
 * Application injected items.
 * Contains all registered factories, classes, singletones etc.
 */
export class AppInjectedItems {
    public userService: UserService;
    public userRepository: UserRepository;
}
