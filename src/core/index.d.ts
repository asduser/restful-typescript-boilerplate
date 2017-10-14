declare module '@app/core' {

    export { ExpressParams, IController } from "@app/controllers";
    export { IEntity, IValidationEntity } from "@app/entities";
    export { IService } from "@app/services";
    export { IMongoDBRepository } from "@app/repositories";
    export { IServerOptions, IServer } from "@app/server";
    export { IHttpMessage, IHttpMessageDetails, HttpStatus } from "@app/http";

}
