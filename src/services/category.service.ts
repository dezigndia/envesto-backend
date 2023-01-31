import slugify from "slugify";
import { Category } from "../models";

export class CategoryService {
  public async createCategory(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const categoryObj: any = {
          name: requestData.name,
          slug: slugify(requestData.name),
        };

        const newCat = new Category(categoryObj);
        const res = await newCat.save();
        if (res)
          return resolve({
            status: true,
            message: "Category added Successfully",
            data: res,
          });
        else
          return resolve({
            status: false,
            message: "Something went wrong",
          });
      } catch (error) {
        return reject(error);
      }
    });
  }

  public async getCategory(params: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let condition: any = { isDeleted: false };
        const data = await Category.find(condition);
        if (data) {
          return resolve({ status: true, data, message: "Category list fetch successfully" });
        } else {
          return resolve({ status: false, message: "No Data found" });
        }
      } catch (error) {
        return reject(error);
      }
    });
  }

    public async updateCategory(requestData: any) {
      return new Promise(async (resolve, reject) => {
        try {
          const { _id, status, name } = requestData;
          let condition: any = {};

          if (status === false || status === true) {
            condition.status = status;
          }
          if (name) {
            condition.name = name;
            condition.slug = slugify(name.toLowerCase());
          }
          const data = await Category.findByIdAndUpdate(_id, condition, {
            new: true,
          });
          if (data) {
            return resolve({
              status: true,
              message: "Category updated successfully",
              data: data,
            });
          } else {
            return resolve({ status: false, message: "something went wrong" });
          }
        } catch (error) {
          return reject(error);
        }
      });
    }

    public async deleteCategory(params: any) {
      return new Promise(async (resolve, reject) => {
        try {
          const { _id, isDeleted } = params;
          let condition: any = {};
          condition.isDeleted = true;

          const data = await Category.findByIdAndUpdate(_id, condition, {
            new: true,
          });
          if (data) {
            return resolve({
              status: true,
              message: "Category deleted successfully",
            });
          } else {
            return resolve({ status: false, message: "something went wrong" });
          }
        } catch (error) {
          return reject(error);
        }
      });
    }

  
}
