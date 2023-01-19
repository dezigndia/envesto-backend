import { UserController } from "../../controllers";
import { Router } from "express";

const userRouter = Router();

/*****************************************************************************************
 *           Get user profile - "/api/user/profile?_id=61a468b0d4e55c5760611108"
 *****************************************************************************************/
/**
 * @api {GET} /api/user/profile?_id=61a468b0d4e55c5760611108 GET user profile
 * @apiName User-profle-GET
 * @apiGroup User
 * @apiHeader {String} Authorization Bearer token
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
 *       "message": "User profile fetch successfully"
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *        "error": true,
 *        "message": "Something went wrong"
 *     }
 */
userRouter.get("/profile", UserController.getUserProfile);

/******************************************************************************
 *                     Update User Profile - "PUT /api/user/profile"
 ******************************************************************************/
/**
 * @api {PUT} /api/user/profile Update user profile
 * @apiName User-Profile-PUT
 * @apiGroup User
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *{
 *      "_id":"61a468b0d4e55c5760611108"
 *       "name": "name",
 *       "email":"email",
 *       "phone": "phone",
 *       "role": "role"
 *  }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "User profile updated successfully !!"
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *        "error": true,
 *        "message": "Something went wrong"
 *     }
 */
    userRouter.put("/profile", UserController.updateUserProfile);

export default userRouter;
