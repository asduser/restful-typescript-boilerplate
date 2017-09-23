import * as tokenProvider from "../../../providers/token/token-provider";

export const getToken = (req, res, next) => {
    const token = tokenProvider.generate();
    res.json({
        message: 'Use this token in the "Authorization" header',
        token: token
    });
};
