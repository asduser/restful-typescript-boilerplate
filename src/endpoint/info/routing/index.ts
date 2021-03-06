import {Router} from "express";
import {getAppInfo} from "./get-app-info";
import * as tokenProvider from "../../../providers/token/token-provider";

const router = Router();

router.get('/', getAppInfo);

router.get('/s', (req, res, next) => {
    next(new Error('Test internal error'));
});

router.get('/s1', (req, res, next) => {
    next(new Error('Test 1'));
});

router.get('/secured', tokenProvider.ensureToken, (req, res, next) => {
    res.json({
        description: 'Protected information. Congrats!'
    });
});

export {router as infoRoute};
