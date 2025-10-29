import { connectDB } from "../db";
import seedProperties from "./seedProperties";
import seedPropertySales from "./seedPropertySales";

const seedDB = async() => {
    // Connect DB
    await connectDB();

    // Seeders
    await seedProperties();
    await seedPropertySales(100000);

    // Finish seeding
    process.exit(0);
};

seedDB();