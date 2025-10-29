import express from 'express';
import { CONFIGS } from './configs/config';
import logger, { print } from './middlewares/logger';
import propertySaleRoutes from "./routes/propertySales";
import { connectDB } from './db';

// Create web application
const app = express();

// Register Middleware
app.use(express.json()); // JSON Parser
app.use(logger); // Logger

// Routes Middleware
app.use("/property-sales", propertySaleRoutes)

// Start server
const startServer = async() => {
    await connectDB();
    app.listen(CONFIGS.PORT, () => {
        print(`Bababoi Server is listening on ${CONFIGS.PORT}`);
    });
};
startServer();
