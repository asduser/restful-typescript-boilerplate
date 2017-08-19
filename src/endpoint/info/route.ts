import {Router} from "express";
import {getAppInfo} from "./get-app-info";

let router = Router();
router.get('/', getAppInfo);
router.get('/s', (req, res, next) => {
    next(new Error('Test internal error'));
});

export {router as infoRoute};