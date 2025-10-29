import express from 'express';
import { CONFIGS } from './configs/config';
import logger, { print } from './middlewares/logger';
import { dummyData } from './utils/fakerUtils';

// Create web application
const app = express();

// Register Middleware
app.use(express.json()); // JSON Parser
app.use(logger); // Logger

// Routes Middleware

// Start server
app.listen(CONFIGS.PORT, () => {
    print('Dayum, server booted.');
});