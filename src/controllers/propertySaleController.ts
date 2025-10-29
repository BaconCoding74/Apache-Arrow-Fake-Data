import { Request, Response } from "express";
import { dummyData } from "../utils/fakerUtils";

export const getPropertySales = (req: Request, res: Response) => {
    res.json(dummyData);
};