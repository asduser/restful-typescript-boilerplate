import {Router} from "express";
import {getAppInfo} from "./get-app-info";

let router = Router();
router.get('/', getAppInfo);

export {router as infoRoute};