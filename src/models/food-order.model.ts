import mongoose, { Schema } from "mongoose";

type FoodOrderSchemaType = {
  user: Schema.Types.ObjectId;
  totalPrice: number;
  foodOrderItems: [];

  status: ["pending", "canceled", "delivered"];
};

const FoodOrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, unique: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: {
      type: [Schema.Types.ObjectId],
      rel: "FoodOrderItem",
      required: true,
    },
    status: ["pending", "canceled", "delivered"],
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderSchemaType>(
  "FoodOrder",
  FoodOrderSchema
);
