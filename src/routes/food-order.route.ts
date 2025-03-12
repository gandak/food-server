import express from "express";
import {
  createFoodOrder,
  getAllOrder,
  getUserOrder,
  updateFoodOrder,
} from "../controllers/food/food-order.controller";

const orderRoute = express.Router();

orderRoute.post("/", createFoodOrder);
orderRoute.get("/", getAllOrder);
orderRoute.get("/:UserId", getUserOrder);
orderRoute.patch("/:foodOrderId", updateFoodOrder);

export default orderRoute;
