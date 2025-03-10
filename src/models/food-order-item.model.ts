import mongoose, { Schema } from "mongoose";

type FoodOrderItemSchemaType = {
  food: Schema.Types.ObjectId;
  quantity: number;
};

const FoodOrderItemSchema = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    rel: "Food",
    required: true,
  },
  quantity: { type: Number, required: true },
});

export default mongoose.model<FoodOrderItemSchemaType>(
  "FoodOrderItem",
  FoodOrderItemSchema
);
