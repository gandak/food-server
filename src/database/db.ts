import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("MongoDB-tei amjilttai holbogdloo");
  } catch (error) {
    console.log("Aldaa garlaa");
  }
};
