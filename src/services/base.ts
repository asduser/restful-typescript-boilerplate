import { IService } from "@app/core";
import { IoC } from "../injectors/ioc";

/**
 * Base application service to work with MongoDB query using an abstraction level.
 * All filters, counting, grouping should be located within service which asks an appropriate
 * repository to execute query.
 * Each application service should be inherited from this one.
 */
export abstract class BaseService implements IService {

    protected userRepository = IoC.get.userRepository;

}
