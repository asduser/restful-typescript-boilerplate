import * as superagent from 'superagent';
import * as noCache from "superagent-no-cache";
import { config } from "../../src/config/config";

/**
 * Allows to manage http-requests for integration tests within test/api/ directory.
 * Uses superagent module inside.
 */
class Request {

    private readonly baseUrl = `http://${config.host}:${config.port}`;

    /**
     * Get data for the specific route.
     * @param {string} route
     * @returns {any}
     */
    public get(route: string) {
      return superagent
          .get(this.makeUrl(route));
    }

    /**
     * Concatenate a basic url string with route string.
     * @param {string} route
     * @returns {string}
     */
    private makeUrl(route: string) {
        return `${this.baseUrl}${route}`;
    };

}

export const request = new Request();
