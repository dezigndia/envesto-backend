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

  // public static async getSubCategory(req: Request, res: Response) {
  //   try {
  //     const { user }: any = req;
  //     const data: any = await _categoryService.getSubCategory(
  //       req.params,
  //       req.query,
  //       user
  //     );
  //     return res.status(StatusCodes.OK).json(data);
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async updateCategory(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.updateCategory(req.body);
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async deleteCategory(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.deleteCategory(req.body);
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async addCategoryAttribute(req: Request, res: Response) {
  //   try {
  //     console.log(req.body);
  //     const data: any = await _categoryService.addCategoryAttribute(req.body);
  //     if (data.status) {
  //       return res.status(StatusCodes.CREATED).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async getCategoryAttribute(req: Request, res: Response) {
  //   try {
  //     const { user }: any = req;
  //     const data: any = await _categoryService.getCategoryAttribute(req.query, user);
  //     return res.status(StatusCodes.OK).json(data);
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async getAllCategoryAttribute(req: Request, res: Response) {
  //   try {
  //     const { user }: any = req;
  //     const data: any = await _categoryService.getAllCategoryAttribute(
  //       req.query,
  //       user
  //     );
  //     return res.status(StatusCodes.OK).json(data);
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async updateCategoryAttribute(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.updateCategoryAttribute(
  //       req.body
  //     );
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async deleteCategoryAttribute(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.deleteCategoryAttribute(
  //       req.body
  //     );
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async deleteCategoryAttributeValue(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.deleteCategoryAttributeValue(
  //       req.body
  //     );
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static async updateCategoryAttributeStatus(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.updateCategoryAttributeStatus(
  //       req.body
  //     );
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }
  // public static async updateCategoryImage(req: Request, res: Response) {
  //   try {
  //     const data: any = await _categoryService.updateCategoryImage(
  //       req.body,
  //       req.file
  //     );
  //     if (data.status) {
  //       return res.status(StatusCodes.OK).json(data);
  //     } else {
  //       return res.status(StatusCodes.PRECONDITION_FAILED).json(data);
  //     }
  //   } catch (error) {
  //     CategoryController.handleError(req, res, error);
  //   }
  // }

  // public static handleError(req: Request, res: Response, error: any) {
  //   LoggerUtils.logError(req, res, error, "category.controller.ts");
  //   console.error(error);
  //   return res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ status: false, error: error, message: error.message });
  // }
}
