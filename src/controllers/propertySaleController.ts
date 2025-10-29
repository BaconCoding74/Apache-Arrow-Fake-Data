import { Request, Response } from "express";
import ProperytySale from "../models/ProperytySale";

export const getPropertySales = async(req: Request, res: Response) => {
    const sales = await ProperytySale.find();
    res.json(sales);
};