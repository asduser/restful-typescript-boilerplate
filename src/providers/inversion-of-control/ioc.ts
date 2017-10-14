import {createContainer, asClass } from "awilix";
import { AppInjectedItems } from "./items";
import {UserService} from "../../services/user/user-service";
import {UserRepository} from "../../repositories/index";

const container = createContainer({});

/**
 * IoC to increase an application modularity.
 */
export class IoC {

    private injectedItems = new AppInjectedItems();

    /**
     * Return application injected items.
     * Each item should be registered in configure() method.
     * @returns {AppInjectedItems}
     */
    public get get(): AppInjectedItems {
        return this.injectedItems;
    }

    constructor() {
        this.configure();
    }

    /**
     *
     */
    private configure(): void {
        container.register('userService', asClass(UserService).singleton());
        container.register('userRepository', asClass(UserRepository).singleton());
        this.injectedItems.userService = container.cradle.userService;
        this.injectedItems.userRepository = container.cradle.userRepository;
    }

}
