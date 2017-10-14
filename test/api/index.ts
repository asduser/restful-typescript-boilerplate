import {expect, request} from "../config";

describe('/users', () => {
    describe('GET', () => {
        it('return all users from db', () => {
            return request
                .get('/test/users')
                .then((res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
        });
    });
});
