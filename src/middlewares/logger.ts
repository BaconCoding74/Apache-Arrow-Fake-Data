import { NextFunction, Request, Response } from "express";
import { CONFIGS } from "../configs/config";
import { writeAppend } from "../utils/fileUtils";

export const print = (message: any, newLine?: boolean, formatES?: string) => {
    const timestamp = new Date().toISOString();
    const formattedMessage = `${formatES ?? ""}${newLine ? "\n" : ""}${timestamp} [Server]: ${message}\x1b[0m`;

    // Console output
    console.log(formattedMessage);
    
    writeAppend(CONFIGS.LOGPATH, formattedMessage);
};

const logger = (req: Request, res: Response, next: NextFunction) => {
    res.on("finish", () => {
        print(`${res.statusCode} ${req.method} ${req.originalUrl}`);
    });
    next();
};

export default logger;