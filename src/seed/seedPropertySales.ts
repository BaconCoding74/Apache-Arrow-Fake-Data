import { faker } from "@faker-js/faker";
import Property, { IProperty } from "../models/Property";
import { print } from "../middlewares/logger";
import { T_FORMAT } from "../configs/escapeSequence";
import ProperytySale, { IPropertySale } from "../models/ProperytySale";

const generatePropertySale = (properties: IProperty[]): IPropertySale => {
    const property = faker.helpers.arrayElement(properties);
    const unit = faker.helpers.arrayElement(property.units);

    return {
        name: property.name,
        type: property.type,
        unit: unit.name,
        sqft: unit.sqft,
        sale: unit.price,
    };
};

const seedPropertySales = async(count = 100000) => {
    const existingCount = await ProperytySale.countDocuments();
    if (existingCount > 0) {
        print(`${T_FORMAT.error}Failed to seed properties because the model already exists.`);
        return;
    }
    
    // Generate mock data
    const properties = await Property.find();
    const sales = Array.from({length: count}, () => generatePropertySale(properties));

    await ProperytySale.insertMany(sales);
    console.log("Property sales seeded.");
};

export default seedPropertySales;