import mongoose, { Schema } from "mongoose";

type FoodOrderSchemaType = {
  user: Schema.Types.ObjectId;
  totalPrice: number;
  foodOrderItems: [];
  status: [];
};

const FoodOrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, unique: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [], required: true },
    status: { type: String, required: true },
    category: { type: ["pending", "canceled", "delivered"], required: true },
  },
  { timestamps: true }
);
