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

/******************************************************************************
 *      Update Category- "PUT /api/category"
 ******************************************************************************/
/**
 * @api {PUT} /api/category update category
 * @apiName Update-category
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *   {
 *      "_id" : category Id,
 *      "status": "true",
 *      "name": "treding",
 *    }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Category updated successfully ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "data":null
 *     }
 */
categoryRouter.put("/", CategoryController.updateCategory);

/************************************************************************************************
 *                     Delete Category - "DELETE /api/category?_id=63c937044d5070f99ad06503"
 ************************************************************************************************/

/**
 * @api {DELETE} /api/category?_id=63c937044d5070f99ad06503 delete category
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
 *       "message": "Category deleted successfully ",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "data":null
 *     }
 */
categoryRouter.delete( "/", CategoryController.deleteCategory);



export default categoryRouter;
