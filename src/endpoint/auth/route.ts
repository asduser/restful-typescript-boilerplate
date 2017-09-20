import {Router} from "express";
import * as tokenProvider from "../../providers/token/token-provider";

const router = Router();

router.post('/token', (req, res, next) => {
    const token = tokenProvider.generate();
    res.json({
        message: 'Use this token in the "Authorization" header',
        token: token
    });
});

export {router as authRoute};
