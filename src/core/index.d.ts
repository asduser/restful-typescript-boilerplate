declare module '@app/core' {

    // controllers declarations
    export { ExpressParams, IController } from "@app/controllers";

    // entities declarations
    export { IEntity, IValidationEntity } from "@app/entities";

    // entities services
    export { IService } from "@app/services";

    // entities repositories
    export { IMongoDBRepository } from "@app/repositories";

    // entities server
    export { IServerOptions, IServer } from "@app/server";

}
