import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import route from "./routes/food-category.route";
import categoryRoute from "./routes/food-category.route";
import foodRoute from "./routes/food.route";
import orderRoute from "./routes/food-order.route";
import userRoute from "./routes/user.route";

configDotenv();
connectMongoDb();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/food", foodRoute);
app.use("/food-category", categoryRoute);
app.use("/food-order", orderRoute);
app.use("/auth", userRoute);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
