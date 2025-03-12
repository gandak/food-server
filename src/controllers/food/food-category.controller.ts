import foodCategoryModel from "../../models/food-category.model";
import { Request, Response } from "express";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    console.log(categoryName);
    const newCategory = await foodCategoryModel.create({ categoryName });
    res
      .status(200)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error while creating food category", error });
  }
};

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully received categories", allCategories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while getting food categories", error });
  }
};

export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    const { categoryName } = req.body;
    await foodCategoryModel.updateOne(
      { _id: foodCategoryId },
      { categoryName }
    );

    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully edited category", allCategories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while editing food category", error });
  }
};

export const deteleFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    await foodCategoryModel.deleteOne({ _id: foodCategoryId });

    res.status(200).json({ message: "Successfully deleted category" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting food category", error });
  }
};
