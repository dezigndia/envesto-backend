import { Request, Response } from "express";
import { INTERNAL_SERVER_ERROR, StatusCodes } from "http-status-codes";
import { CategoryService } from "../services/index";

const _categoryService = new CategoryService();

export class CategoryController {
  public static async createCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.createCategory(req.body);
      if (data.status) {
        return res.status(StatusCodes.CREATED).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  public static async getCategory(req: Request, res: Response) {
    try {
      const { user }: any = req;
      const data: any = await _categoryService.getCategory(req.query);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.NO_CONTENT).json(data);
      }
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  public static async updateCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.updateCategory(req.body);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  public static async deleteCategory(req: Request, res: Response) {
    try {
      const data: any = await _categoryService.deleteCategory(req.query);
      if (data.status) {
        return res.status(StatusCodes.OK).json(data);
      } else {
        return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
      }
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }
}
