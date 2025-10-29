import { faker } from "@faker-js/faker";

const dummyProperties = [
    {
        name: "A",
        type: "Condo",
        units: [
            { name: "A", price: 350000, sqft: 850 },
            { name: "B", price: 370000, sqft: 950 },
            { name: "C", price: 400000, sqft: 1100 },
        ],
    },
    {
        name: "B",
        type: "Apartment",
        units: [
            { name: "A", price: 250000, sqft: 650 },
            { name: "B", price: 260000, sqft: 700 },
            { name: "C", price: 280000, sqft: 800 },
        ],
    },
    {
        name: "C",
        type: "House",
        units: [
            { name: "A", price: 550000, sqft: 1400 },
            { name: "B", price: 580000, sqft: 1550 },
        ],
    },
    {
        name: "D",
        type: "Condo",
        units: [
            { name: "A", price: 360000, sqft: 880 },
            { name: "B", price: 380000, sqft: 1000 },
            { name: "C", price: 410000, sqft: 1150 },
        ],
    },
    {
        name: "E",
        type: "Apartment",
        units: [
            { name: "A", price: 270000, sqft: 680 },
            { name: "B", price: 290000, sqft: 750 },
        ],
    },
    {
        name: "F",
        type: "House",
        units: [
            { name: "A", price: 600000, sqft: 1500 },
            { name: "B", price: 650000, sqft: 1700 },
            { name: "C", price: 700000, sqft: 1900 },
        ],
    },
    {
        name: "G",
        type: "Condo",
        units: [
            { name: "A", price: 340000, sqft: 820 },
            { name: "B", price: 360000, sqft: 940 },
            { name: "C", price: 380000, sqft: 1050 },
        ],
    },
    {
        name: "H",
        type: "Apartment",
        units: [
            { name: "A", price: 260000, sqft: 660 },
            { name: "B", price: 280000, sqft: 720 },
            { name: "C", price: 300000, sqft: 800 },
        ],
    },
    {
        name: "I",
        type: "House",
        units: [
            { name: "A", price: 570000, sqft: 1450 },
            { name: "B", price: 600000, sqft: 1600 },
        ],
    },
    {
        name: "J",
        type: "Condo",
        units: [
            { name: "A", price: 355000, sqft: 860 },
            { name: "B", price: 375000, sqft: 970 },
            { name: "C", price: 400000, sqft: 1100 },
        ],
    },
];

const generatePropertySale = () => {
    const property = faker.helpers.arrayElement(dummyProperties)
    const unit = faker.helpers.arrayElement(property.units);

    return {
        name: property.name,
        type: property.type,
        unit: unit.name,
        size: unit.sqft,
        price: unit.price,
    };
};

const generatePropertySales = (count = 100) => {
    return Array.from({length: count}, () => generatePropertySale());
};

export const dummyData = generatePropertySales(1000);
