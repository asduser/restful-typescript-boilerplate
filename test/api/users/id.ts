import {expect, api} from "../../config";

describe('/users/:id', () => {
    describe('GET', () => {
        const uniqueId = new Date().getTime();

        /**
         * User id - is an ObjectId and it should be in the appropriate
         * MongoDb format. If not - will be returned 400 error.
         */
        it('return error when id is invalid', async () => {
            const res = await api.get(`/test/users/${uniqueId}`);

            expect(res.status).to.equal(400);
        });

    });
});
