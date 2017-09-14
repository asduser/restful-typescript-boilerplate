const jwt = require('jsonwebtoken');
import {config} from "../../config/config";
import {ForbiddenError} from "../../http";

export const ensureToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(" ")[1];
        jwt.verify(req.token, config.jwt.secret_key, function(err, data) {
            if (err) {
                next(new ForbiddenError());
            } else {
                next();
            }
        });
    } else {
        next(new ForbiddenError());
    }
};

export const generate = (): string => {
    let data = {id: new Date().getTime()};
    return jwt.sign(data, config.jwt.secret_key);
};
