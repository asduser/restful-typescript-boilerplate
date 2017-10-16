import { IService } from "@app/core";
import { IoC } from "../injectors/ioc";

export abstract class BaseService implements IService {

    protected userRepository = IoC.get.userRepository;

}
