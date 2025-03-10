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
categoryRoute.patch("/:foodCategoryId", updateFoodCategory);
categoryRoute.delete("/:foodCategoryId", deteleFoodCategory);

export default categoryRoute;
