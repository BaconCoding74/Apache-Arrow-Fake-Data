import { NextFunction, Request, Response } from "express";

export const print = (message: any) => {
    console.log(`${new  Date().toISOString()} [Server]: ${message}`)
};

const logger = (req: Request, res: Response, next: NextFunction) => {
    print(`${req.method} ${req.url}`);
    next();
};

export default logger;