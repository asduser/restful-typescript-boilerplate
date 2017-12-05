import * as Bottle from "bottlejs";
import {MongoProvider, IMongoProvider} from "../../providers";
import {UserService} from "../../services";
import {UserRepository} from "../../repositories";

class InjectedItems {
    public mongoProvider: IMongoProvider;
    public userService: UserService;
    public userRepository: UserRepository;
}

export class AppContainer {

    private static bottle: Bottle;
    private static container: Bottle.IContainer;
    private static items: InjectedItems;

    public static getItems (): InjectedItems {
        console.log(AppContainer.items);
        return AppContainer.items;
    }

    public static configure (): void {
        AppContainer.bottle = new Bottle();
        AppContainer.container = AppContainer.bottle.container;
        AppContainer.items = new InjectedItems();

        // providers
        AppContainer.bottle.service('mongoProvider', MongoProvider as any);
        AppContainer.items.mongoProvider = AppContainer.container['mongoProvider'];

        // repositories
        AppContainer.bottle.service('userRepository', UserRepository as any);
        AppContainer.items.userRepository = AppContainer.container['userRepository'];

        // services
        AppContainer.bottle.service('userService', UserService as any);
        AppContainer.items.userService = AppContainer.container['userService'];
    }

}
