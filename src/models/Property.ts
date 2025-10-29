import { Document, model, Schema } from "mongoose";

export interface IUnit {
    name: String;
    price: Number;
    sqft: Number;
};

export interface IProperty extends Document {
    name: String;
    type: String;
    units: IUnit[];
};

const unitSchema = new Schema<IUnit>({
    name: { type: String, required: true},
    price: { type: Number, required: true },
    sqft: { type: Number, required: true },
})

const propertySchema = new Schema<IProperty>({
    name: { type: String, required: true},
    type: { type: String, default: "" },
    units: { type: [unitSchema], default: [] },
});

export default model<IProperty>('properties', propertySchema);