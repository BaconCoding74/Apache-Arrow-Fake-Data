import { model, Schema } from "mongoose";

export interface IPropertySale {
    name: String;
    type: String;
    unit: String;
    sqft: Number;
    sale: Number;
};

const PropertySaleSchema = new Schema<IPropertySale>({
    name: {type: String, required: true},
    type: {type: String, default: ""},
    unit: {type: String, required: true},
    sqft: {type: Number, required: true},
    sale: {type: Number, required: true},
});

export default model<IPropertySale>('property_sales', PropertySaleSchema);