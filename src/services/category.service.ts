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

  //   public async getSubCategory(params: any, query: any, user: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         let condition: any = {};
  //         const { id } = params;
  //         const { status, isDeleted, length, skip, role } = query;
  //         if (id) {
  //           condition.parentId = id;
  //         }
  //         if (status === "true" || status === "false") {
  //           condition.status = status == "true" ? true : false;
  //         }
  //         if (role !== "A") {
  //           condition.isDeleted = false;
  //         }
  //         const data: Array<any> = await Category.find(condition).sort({
  //           createdAt: -1,
  //         });

  //         if (data.length) {
  //           return resolve({
  //             status: true,
  //             data: data,
  //             message: "Sub category list",
  //           });
  //         } else {
  //           return resolve({
  //             status: false,
  //             message: "No Data found",
  //             data: data,
  //           });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async updateCategory(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { _id, status, name } = requestData;
  //         let condition: any = {};

  //         if (status === false || status === true) {
  //           condition.status = status;
  //         }
  //         if (name) {
  //           condition.name = name;
  //           condition.slug = slugify(name.toLowerCase());
  //         }
  //         const data = await Category.findByIdAndUpdate(_id, condition, {
  //           new: true,
  //         });
  //         if (data) {
  //           return resolve({
  //             status: true,
  //             message: "updated successfully",
  //             data: data,
  //           });
  //         } else {
  //           return resolve({ status: false, message: "something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async deleteCategory(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { _id, isDeleted } = requestData;
  //         let condition: any = {};
  //         condition.isDeleted = true;

  //         const data = await Category.findByIdAndUpdate(_id, condition, {
  //           new: true,
  //         });
  //         if (data) {
  //           return resolve({
  //             status: true,
  //             message: "deleted successfully",
  //           });
  //         } else {
  //           return resolve({ status: false, message: "something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async addCategoryAttribute(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const resp = [];
  //         const categoryId = requestData.categoryId;
  //         for (let item of requestData.attributes) {
  //           const { name, values } = item;
  //           const slug = slugify(name.toLowerCase());
  //           const isAttributeExist = await CategoryAttribute.findOne({
  //             slug: slug,
  //             category: categoryId,
  //             isDeleted: false
  //           });
  //           if (isAttributeExist) {
  //             resolve({
  //               status: false,
  //               message: "Attrbute already exist for the category",
  //               data: resp,
  //             })
  //           } else {
  //             let uniqueValues: any = {};
  //             values.map(
  //               (attr: any) => {
  //                 if (!uniqueValues[attr.name]) {
  //                   uniqueValues[attr.name] = true;
  //                   return (attr["slug"] = slugify(attr.name.toLowerCase()));
  //                 }
  //               });
  //             const attributeData = { category: mongoose.Types.ObjectId(categoryId), name, slug, values };
  //             const newAttributeData = new CategoryAttribute(attributeData);
  //             const result = await newAttributeData.save();
  //             resp.push(result);
  //           }
  //         }

  //         return resolve({
  //           status: true,
  //           message: "Added successfully",
  //           data: resp,
  //         });
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async getCategoryAttribute(query: any, user: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { id, role } = query;
  //         const ObjectId = mongoose.Types.ObjectId;
  //         let condition: any = {
  //           category: id,
  //         }
  //         if (role !== "A") {
  //           condition.isDeleted = false;
  //         }
  //         const attributeLists: any = await CategoryAttribute.find(condition).populate("category", "_id name slug");
  //         if (attributeLists.length) {
  //           return resolve({
  //             status: true,
  //             data: attributeLists,
  //             message: "Attribute and its value list",
  //           });
  //         } else {
  //           return resolve({
  //             status: false,
  //             message: "No Data found",
  //             data: [],
  //           });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async getAllCategoryAttribute(query: any, user: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { skip, length, status, category, role } = query;
  //         let condition: any = {};
  //         if (role !== "A") {
  //           condition.isDeleted = false;
  //         }
  //         if (category) {
  //           condition.category = mongoose.Types.ObjectId(category);
  //         }
  //         const attributeLists: any = await CategoryAttribute.find(condition, "name _id category values status")
  //           .populate("category");
  //         // const attributeLists: any = await Category.aggregate([
  //         //   {
  //         //     $project: {
  //         //       _id: 0,
  //         //       categoryName: "$name",
  //         //       categoryId: "$_id",
  //         //       attributes: {
  //         //         $filter: {
  //         //           input: "$attributes",
  //         //           as: "attributes",
  //         //           cond: { $eq: ["$$attributes.status", true] },
  //         //         },
  //         //       },
  //         //     },
  //         //   },
  //         //   { $unwind: "$attributes" },
  //         // ]);
  //         if (attributeLists.length) {
  //           return resolve({
  //             status: true,
  //             data: attributeLists,
  //             message: "Attribute and its value list",
  //           });
  //         } else {
  //           return resolve({
  //             status: false,
  //             message: "No Data found",
  //             data: [],
  //           });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async updateCategoryAttribute(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { _id, valueId, status, name, type } = requestData;
  //         let condition: any = {};
  //         let updateValues: any = {};

  //         if (type === "attr") {
  //           condition = { "attributes._id": _id };
  //           updateValues = { $set: { "attributes.$.status": status } };
  //         } else {
  //           condition = { "attributes._id": _id, "values._id": valueId };
  //           updateValues = { $set: { "values.$.status": status } };
  //         }

  //         const data = await Category.updateOne(condition, updateValues);

  //         if (data.nModified) {
  //           return resolve({
  //             status: true,
  //             message: "updated successfully",
  //             data: data,
  //           });
  //         } else {
  //           return resolve({ status: false, message: "something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async deleteCategoryAttribute(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { _id } = requestData;
  //         const attribute: any = await CategoryAttribute.findByIdAndUpdate(_id, { isDeleted: true, deletedAt: new Date() }, { new: true });
  //         if (attribute) {
  //           return resolve({
  //             status: true,
  //             message: "deleted successfully",
  //             data: attribute,
  //           });
  //         } else {
  //           return resolve({ status: false, message: "something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async deleteCategoryAttributeValue(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { _id, valueIds } = requestData;
  //         let deleteAttributePromises: any = [];
  //         await new Promise<void>(async (resolve, reject) => {
  //           valueIds.forEach(async (id: any) => {
  //             deleteAttributePromises.push(CategoryAttribute.updateOne(
  //               { 'values._id': id },
  //               { $set: { 'values.$.isDeleted': true, 'values.$.deletedAt:': new Date() } },
  //             ));
  //           });
  //           resolve();
  //         });
  //         const attributes = await Promise.all([...deleteAttributePromises]);

  //         if (attributes) {
  //           return resolve({
  //             status: true,
  //             message: "deleted successfully",
  //           });
  //         } else {
  //           return resolve({ status: false, message: "something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }
  //   public async updateCategoryAttributeStatus(requestData: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { _id, status } = requestData;
  //         const attribute: any = await CategoryAttribute.findByIdAndUpdate(_id, { status }, { new: true });
  //         if (attribute) {
  //           return resolve({
  //             status: true,
  //             data: attribute,
  //             message: "Updated successfully",
  //           });
  //         } else {
  //           return resolve({ status: false, message: "something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  //   public async updateCategoryImage(requestData: any, attachment: any) {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         let { _id } = requestData;
  //         const category: any = await Category.findById(_id)
  //           .populate("attachment");
  //         const data: any = await deleteFileFromS3(category.attachment.filePath);
  //         if (data.status) {
  //           await Attachment.findByIdAndUpdate(mongoose.Types.ObjectId(category.attachment._id), { isDeleted: true });
  //           const attachmentData: any = await FileUtils.saveFile(attachment);
  //           const newCategory = await Category.findByIdAndUpdate(_id, { attachment: attachmentData._id }, { new: true });
  //           return resolve({
  //             status: true,
  //             message: "Category image updated successfully",
  //             data: newCategory
  //           });
  //         } else {
  //           return resolve({ status: false, message: "Something went wrong" });
  //         }
  //       } catch (error) {
  //         return reject(error);
  //       }
  //     });
  //   }

  // }
  // function createCategory(categories: any, parentId: any = null): Array<any> {
  //   try {
  //     let category;
  //     let categoryList = [];
  //     if (parentId == null) {
  //       category = categories.filter((item: any) => item.parentId == undefined);
  //     } else {
  //       category = categories.filter((item: any) => item.parentId == parentId);
  //     }
  //     for (let cat of category) {
  //       let catObj: any = {
  //         _id: cat._id,
  //         name: cat.name,
  //         slug: cat.slug,
  //         status: cat.status,
  //         isDeleted: cat.isDeleted,
  //       };
  //       if (cat.attachment) {
  //         catObj.attachmentId = cat.attachment._id;
  //         catObj.file = cat.attachment.filePath;
  //       }
  //       catObj.children = createCategory(categories, cat._id);
  //       categoryList.push(catObj);
  //     }
  //     return categoryList;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // const calculateProductCount = async function(categoryList: any) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let _categoryList = [];

  //       for(let category of categoryList) {
  //         let categoryObj = {...category};
  //         let count = await Product.countDocuments({ category: category._id, isDeleted: false, status: "Active" });
  //         categoryObj.productCount = count;
  //         _categoryList.push(categoryObj);
  //       }

  //       resolve({ categoryList: _categoryList });
  //     }
  //     catch(error) {
  //       reject(error);
  //     }
  //   });
}
