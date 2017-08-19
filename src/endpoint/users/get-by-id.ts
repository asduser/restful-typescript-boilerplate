import {Request, Response, NextFunction} from "express";

export const getById = (req: Request, res: Response, next: NextFunction) => {
    let users = [
        { name: "bob", age: 20, id: 1 },
        { name: "carl", age: 25, id: 2 },
        { name: "chuck", age: 30, id: 3 }
    ];
    let user = users.find((u) => u.id == req.params.id);
    let response = user || `User with id ${req.params.id} does not exist.`;
    return res.json(response).end;
};