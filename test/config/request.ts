import * as supertest from 'supertest';
import { config } from "../../src/config/config";

const baseUrl = `http://${config.host}:${config.port}`;
export const api = supertest(baseUrl);
