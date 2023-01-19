import { Router } from "express";
import { CategoryController } from "../../controllers";

const categoryRouter = Router();

/******************************************************************************
 *                     Add category - "POST /api/category"
 ******************************************************************************/
/**
 * @api {POST} /api/category add category
 * @apiName Admin-Add-Category-POST
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *   {
 *      "name": "Trending"
 *    }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Category added successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "message"
 *       "data":null
 *     }
 */
categoryRouter.post("/", CategoryController.createCategory);

/******************************************************************************
 *                     category List - "GET /api/category/list"
 ******************************************************************************/

/**
 * @api {GET} /api/category/list get category List
 * @apiName All-category-list
 * @apiGroup Category
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "category List fetch successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "No data"
 *       "data":null
 *     }
 */
categoryRouter.get("/list",
  CategoryController.getCategory);

// /******************************************************************************
//  *                     sub category List - "GET /api/category/sub-category/<parentId>"
//  ******************************************************************************/

// /**
//  * @api {GET} /api/category/sub-category/<parentId> get sub category List
//  * @apiName sub-category-list
//  * @apiGroup Category
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "sub category Lists ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "message": "No data"
//  *       "data":null
//  *     }
//  */
// _router.get("/sub-category/:id",
//   CategoryController.getSubCategory);

// /******************************************************************************
//  *                     Update Category or sub category - "PUT /api/category"
//  ******************************************************************************/

// /**
//  * @api {PUT} /api/category update category or sub category
//  * @apiName Update-category-or-sub-category
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  *   {
//  *      "_id" : category Id,
//  *      "status": "true",
//  *      "name": "kumar",
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Updated successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.put(
//   "/",
//   AuthMiddleware.verifyToken,
//   validateUpdateCategory,
//   CategoryController.updateCategory
// );

// /******************************************************************************
//  *                     Delete Category or sub category - "DELETE /api/category"
//  ******************************************************************************/

// /**
//  * @api {DELETE} /api/category delete category or sub category
//  * @apiName Delete-category-or-sub-category
//  * @apiGroup Category
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  *  * @apiExample Sample-Request:
//  *   {
//  *      "_id": "djbsakdksjd473bk",
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "deleted successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.delete(
//   "/",
//   AuthMiddleware.verifyToken,
//   validateDelete,
//   CategoryController.deleteCategory
// );

// /******************************************************************************
//  *                     Add category attributes - "POST /api/category/attribute"
//  ******************************************************************************/

// /**
//  * @api {POST} /api/category/attribute add category attributes
//  * @apiName add-category-attributes
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  * {
//  * "categoryId": "609ebd48f25ade44bc8501ca",
//  *  "attributes": [
//  *    {
//  *      "name": "four Wheeler",
//  *      "values": [
//  *        {
//  *          "name": "maruti"
//  *        },
//  *        {
//  *          "name": "ford"
//  *        },
//  *        {
//  *          "name": "yamaha"
//  *        }
//  *      ]
//  *    },
//  *    {
//  *      "name": "green vege",
//  *      "values": [
//  *        {
//  *          "name": "potato"
//  *        },
//  *        {
//  *          "name": "tomato"
//  *        },
//  *        {
//  *          "name": "onion"
//  *        }
//  *      ]
//  *    }
//  *  ]
//  * }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Updated successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.post(
//   "/attribute",
//   // AuthMiddleware.verifyToken,
//   CategoryController.addCategoryAttribute
// );

// /******************************************************************************
//  *                     sub attribute List - "GET /api/category/attribute?id=<categoryId>"
//  ******************************************************************************/

// /**
//  * @api {get} /api/category/attribute?id=<categoryId> get category Attribute
//  * @apiName category-attribute-list
//  * @apiGroup Category
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "sub category Lists ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "message": "No data"
//  *       "data":null
//  *     }
//  */
// _router.get("/attribute",
//   CategoryController.getCategoryAttribute);

// /******************************************************************************
//  *                     get attribute List - "GET /api/category/attribute/all?category="
//  ******************************************************************************/

// /**
//  * @api {get} /api/category/attribute/all?category= get category Attribute List
//  * @apiName category-attribute-list
//  * @apiGroup Category
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "fetched category Lists ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "message": "No data"
//  *       "data":null
//  *     }
//  */
// _router.get("/attribute/all?",
//   CategoryController.getAllCategoryAttribute);

// /******************************************************************************
//  *                     Update category attributes - "PUT /api/category/attribute"
//  ******************************************************************************/

// /**
//  * @api {put} /api/category/attribute update category attributes
//  * @apiName update-category-attributes
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  *   {
//  *      "status": true | false,
//  *      "_id": "60a8a6a40018c046b8c29d5e",
//  *      "valueId": 60a8a6a40018c046b8c29d60
//  *      "type": "attr" || "attr2"
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Updated successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.put(
//   "/attribute",
//   AuthMiddleware.verifyToken,
//   CategoryController.updateCategoryAttribute
// );

// /******************************************************************************
//  *                     Delete category attributes status - "DELETE /api/category/attribute"
//  ******************************************************************************/

// /**
//  * @api {DELETE} /api/category/attribute delete category attributes
//  * @apiName delete-category-attributes-status
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  *   {
//  *      "_id": "60a8a6a40018c046b8c29d5e", (attribute Id)
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Deleted successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.delete(
//   "/attribute",
//   AuthMiddleware.verifyToken,
//   CategoryController.deleteCategoryAttribute
// );

// /******************************************************************************
//  *         Delete category attributes values - "DELETE /api/category/attribute/values"
//  ******************************************************************************/

// /**
//  * @api {Delete} /api/category/attribute/values delete category attributes values
//  * @apiName Delete-category-attributes-values
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  *   {
//  *      "_id": "60a8a6a40018c046b8c29d5e",
//  *      "valueIds": ["60a8a6a40018c046b8c29d60"],
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Delete successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.delete(
//   "/attribute/values",
//   AuthMiddleware.verifyToken,
//   CategoryController.deleteCategoryAttributeValue
// );

// /******************************************************************************
//  *         PUT category attributes status - "PUT /api/category/attribute/values"
//  ******************************************************************************/

// /**
//  * @api {Update} /api/category/attribute/values update category attributes status
//  * @apiName Update-category-attributes-status
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  *   {
//  *      "_id": "60a8a6a40018c046b8c29d5e",
//  *      "status": "false",
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Updated successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.put(
//   "/attribute/status",
//   AuthMiddleware.verifyToken,
//   CategoryController.updateCategoryAttributeStatus
// );

// /******************************************************************************
//  *         PUT category image - "PUT /api/category/image"
//  ******************************************************************************/

// /**
//  * @api {Update} /api/category/image update category image
//  * @apiName Update-category-image
//  * @apiGroup Category
//  * @apiHeader {String} Authorization Bearer token
//  *
//  * @apiSuccess {boolean} error for checking the error.
//  * @apiSuccess {String} message for information.
//  * @apiSuccess {object} data for payload.
//  *
//  * @apiExample Sample-Request:
//  *   {
//  *      "_id": "60a8a6a40018c046b8c29d5e",
//  *      "categoryImage": (binary)
//  *    }
//  *
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "status": true,
//  *       "error": false,
//  *       "message": "Updated successfully ",
//  *       "data": object
//  *     }
//  *
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 204 unauthorized request
//  *     {
//  *        "status": false
//  *       "error": true,
//  *       "data":null
//  *     }
//  */
// _router.put(
//   "/image",
//   AuthMiddleware.verifyToken,
//   upload.single("categoryImage"),
//   CategoryController.updateCategoryImage
// );

export default categoryRouter;
