import {Router} from "express";
const jwt = require('jsonwebtoken');
import * as tokenProvider from "../../providers/token/token-provider";

let router = Router();

router.post('/token', (req, res, next) => {
    const token = tokenProvider.generate();
    res.json({
        message: 'Use this token in the "Authorization" header',
        token: token
    });
});

export {router as authRoute};