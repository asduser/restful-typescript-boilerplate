import {Router} from "express";
import {getById} from "./get-by-id";
import {getAll} from "./get-all";

let router = Router();
router.get('/', getAll);
router.get('/:id', getById);

export {router as usersRoute};