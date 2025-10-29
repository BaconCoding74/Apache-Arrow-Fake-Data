import { NextFunction, Request, Response } from "express";
import { appendFileSync } from "fs";
import { CONFIGS } from "../configs/config";
import { writeAppend } from "../utils/fileUtils";

export const print = (message: any) => {
    const formattedMessage = `${new  Date().toISOString()} [Server]: ${message}`
    console.log(formattedMessage);
    
    writeAppend(CONFIGS.LOGPATH, formattedMessage);
};

const logger = (req: Request, res: Response, next: NextFunction) => {
    print(`${res.statusCode} ${req.method} ${req.url}`);
    next();
};

export default logger;