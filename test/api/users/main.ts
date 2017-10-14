import {expect, api} from "../../config";

describe('/users', () => {
    // route path to avoid code duplication
    const route = '/test/users';

    describe('GET', () => {
        it('return all users from db (using Promise)', () => {
            return api
                .get(route)
                .then((res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
        });

        it('return all users from db (using async/await)', async () => {
            const res = await api.get(route);
            expect(res.status).to.equal(200);
        });
    });
});
