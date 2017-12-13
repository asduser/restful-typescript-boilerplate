import {IService} from "@app/core";
import {AppContainer} from "../injectors";
import * as _ from "lodash";

/**
 * Base application service to work with MongoDB query using an abstraction level.
 * All filters, counting, grouping should be located within service which asks an appropriate
 * repository to execute query.
 * Each application service should be inherited from this one.
 */
export abstract class BaseService implements IService {

    protected userRepository = AppContainer.userRepository;

    protected normalizeResponse(data: any | any[]) {
        function normalizeData (data) {
            const preparedData = Object.assign({}, data, {
                id: data._id,
            });
            return _.omit(preparedData, '_id');
        }

        if (_.isArray(data)) {
            return data.map((item) => {
                return normalizeData(item);
            })
        }
        return normalizeData(data);
    }

}
