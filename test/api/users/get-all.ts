import {api} from "../../config";

describe('/users', () => {
    // route path to avoid code duplication
    const route = '/test/users';

    describe('GET', () => {
        it('return all users from db (using Promise)', () => {
            return api
                .get(route)
                .then((res) => {
                    expect(res.status).toEqual(200);
                });
        });

        it('return all users from db (using async/await)', async () => {
            const res = await api.get(route);
            expect(res.status).toEqual(200);
        });
    });
});
