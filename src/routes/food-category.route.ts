import express from "express";
import {
  createFoodCategory,
  deteleFoodCategory,
  getFoodCategory,
  updateFoodCategory,
} from "../controllers/food/food-category.controller";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.put("/", updateFoodCategory);
categoryRoute.delete("/", deteleFoodCategory);

export default categoryRoute;
