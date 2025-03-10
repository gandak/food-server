import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: ["user", "admin"];
  orderedFoods: Schema.Types.ObjectId[];
  ttl: Date;
  isVerified: boolean;
};

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: ["user", "admin"],
    orderedFoods: { type: Schema.Types.ObjectId },
    ttl: { type: Date },
    isVerified: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemaType>("Food", UserSchema);
