import * as supertest from 'supertest';
import { config } from "../../src/config/config";

/**
 * Allows to manage http-requests for integration tests within test/api/ directory.
 * Uses a supertest module inside.
 */
class Api {

    private readonly baseUrl = `http://${config.host}:${config.port}`;
    private readonly request = supertest(this.baseUrl);

    public get(route: string): supertest.Request {
        return this.request.get(route);
    }

    public post(route: string): supertest.Request {
        return this.request.get(route);
    }

    public put(route: string): supertest.Request {
        return this.request.get(route);
    }

    public delete(route: string): supertest.Request {
        return this.request.get(route);
    }

}

export const api = new Api();
