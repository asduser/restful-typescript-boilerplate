import {Request, Response, NextFunction} from "express";

export const getAll = (req: Request, res: Response, next: NextFunction) => {
    const users = [
        { name: "bob", age: 20 },
        { name: "carl", age: 25 },
        { name: "chuck", age: 30 }
    ];
    return res.json(users).end;
};
