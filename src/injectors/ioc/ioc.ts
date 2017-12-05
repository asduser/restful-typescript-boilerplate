import {createContainer, asClass } from "awilix";
import { AppInjectedItems } from "./items";
import {UserService} from "../../services/user/user-service";
import {UserRepository} from "../../repositories/index";

const container = createContainer({});

/**
 * IoC to increase an application modularity.
 */
export class IoC {

    private static injectedItems = new AppInjectedItems();

    /**
     * Return application injected items.
     * Each item should be registered in configure() method.
     * @returns {AppInjectedItems}
     */
    public static get get(): AppInjectedItems {
        return IoC.injectedItems;
    }

    constructor() {}

    /**
     * Register application services, repositories, functional modules into the
     * main container. It should be called at the top of application to work properly.
     */
    public static configure(): void {
        container.register('userRepository', asClass(UserRepository));
        IoC.injectedItems.userRepository = container.cradle.userRepository;

        container.register('userService', asClass(UserService).singleton());
        IoC.injectedItems.userService = container.cradle.userService;
    }

}
