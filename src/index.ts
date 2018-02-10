import "./config/init";
import "reflect-metadata";
import {config} from "./config/config";
import {AppContainer} from "./injectors";
import {ExpressServer} from "./server";
import * as app from "./app";

(async () => {
    const server = new ExpressServer(app, config);
    try {
        await AppContainer.mongoProvider.connect(config.mongodb.url);
        await server.run();
    } catch (err) {
        AppContainer.logger.info(err);
        process.exit(1);
    }
})();
