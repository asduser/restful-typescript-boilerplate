import * as Bottle from "bottlejs";
import {MongoProvider, SchemaValidatorProvider} from "../../providers";
import {UserService} from "../../services";
import {UserRepository} from "../../repositories";

export class AppContainer {

    private static bottle: Bottle;
    private static container: Bottle.IContainer;

    public static schemaValidatorProvider: SchemaValidatorProvider;
    public static mongoProvider: MongoProvider;
    public static userRepository: UserRepository;
    public static userService: UserService;

    public static configure (): void {
        AppContainer.bottle = new Bottle();
        AppContainer.container = AppContainer.bottle.container;

        // providers
        AppContainer.bottle.service('mongoProvider', MongoProvider as any);
        AppContainer.mongoProvider = AppContainer.container['mongoProvider'];
        AppContainer.bottle.service('schemaValidatorProvider', SchemaValidatorProvider as any);
        AppContainer.schemaValidatorProvider = AppContainer.container['schemaValidatorProvider'];

        // repositories
        AppContainer.bottle.service('userRepository', UserRepository as any);
        AppContainer.userRepository = AppContainer.container['userRepository'];

        // services
        AppContainer.bottle.service('userService', UserService as any);
        AppContainer.userService = AppContainer.container['userService'];
    }

}
