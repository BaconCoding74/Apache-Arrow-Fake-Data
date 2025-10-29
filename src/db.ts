import mongoose from "mongoose";
import { print } from "./middlewares/logger"
import { CONFIGS } from "./configs/config";

export const connectDB = async() => {
    try {
        await mongoose.connect(CONFIGS.MONGO_URI);
        print("MongoDB connected.", true)
    } catch (error) {
        print("MongoDB connection error: ", error);
        process.exit(1);
    }
};