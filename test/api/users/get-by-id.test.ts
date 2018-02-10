import * as api from "../../request";

describe('/users/:id', () => {
    describe('GET', () => {
        it('return error when id is invalid', async () => {
            const invalidId = new Date().getTime();
            const res = await api.get(`/test/users/${invalidId}`);

            expect(res.status).toEqual(400);
        });

    });
});
