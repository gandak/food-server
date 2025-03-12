import foodCategoryModel from "../../models/food-category.model";
import { Request, Response } from "express";
import foodOrderModel from "../../models/food-order.model";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;

    const newOrder = await foodOrderModel.create({
      user,
      totalPrice,
      foodOrderItems,
      status,
    });

    res.status(200).json({ message: "Successfully created order", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error while creating food order", error });
  }
};

export const getUserOrder = async (req: Request, res: Response) => {
  try {
    const { UserId } = req.params;
    const userOrder = await foodOrderModel
      .find({ user: UserId })
      .populate("user");

    res
      .status(200)
      .json({ message: "Successfully received user order", userOrder });
  } catch (error) {
    res.status(500).json({ message: "Error while getting user order", error });
  }
};

export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const allOrders = await foodOrderModel.find();

    res
      .status(200)
      .json({ message: "Successfully received all orders", allOrders });
  } catch (error) {
    res.status(500).json({ message: "Error while getting all orders", error });
  }
};

export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const { food, quantity } = req.body;
    await foodCategoryModel.updateOne(
      { _id: foodOrderId },
      { food },
      { quantity }
    );

    res.status(200).json({ message: "Successfully edited order" });
  } catch (error) {
    res.status(500).json({ message: "Error while editing order", error });
  }
};
