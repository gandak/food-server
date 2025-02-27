import foodCategoryModel from "../../models/food-category.model";
import { Request, Response } from "express";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully received categories", allCategories });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    await foodCategoryModel.updateOne({ _id }, { categoryName });

    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully edited category", allCategories });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const deteleFoodCategory = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    await foodCategoryModel.deleteOne({ _id });

    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully deleted category", allCategories });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};
