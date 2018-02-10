import * as api from "../../request";

describe('/users', () => {
    describe('GET', () => {
        it('return all users from db', async () => {
            const res = await api.get('/test/users');

            expect(res.status).toEqual(200);
        });
    });
});
