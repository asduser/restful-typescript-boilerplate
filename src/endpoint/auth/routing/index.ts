import {Router} from "express";
import {getToken} from "./token";

const router = Router();

router.post('/token', getToken);

export {router as authRoute};
