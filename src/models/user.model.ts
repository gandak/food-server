import mongoose, { Schema } from "mongoose";

enum UserRole {
  user = "user",
  admin = "admin",
}

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: Schema.Types.ObjectId[];
  ttl: Date;
  isVerified: boolean;
};

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    address: { type: String, required: false },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.user,
    },
    orderedFoods: { type: Schema.Types.ObjectId },
    ttl: { type: Date },
    isVerified: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemaType>("User", UserSchema);
