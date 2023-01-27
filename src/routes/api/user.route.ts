import { UserController } from "../../controllers";
import { Router } from "express";
import { AuthMiddleware } from '../../middlewares'

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

    /*****************************************************************************************
 *           DELETE user profile - "/api/user/profile?_id=61a468b0d4e55c5760611108"
 *****************************************************************************************/
/**
 * @api {DELETE} /api/user/profile?_id=61a468b0d4e55c5760611108 Delete user profile
 * @apiName User-profle-DELETE
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
 *       "message": "User profile deleted successfully"
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
userRouter.delete("/profile", UserController.deleteUserProfile);

/******************************************************************************
 *                     Add follower - "add /api/user/follower"
 ******************************************************************************/
/**
 * @api {POST} /api/user/follow Add user follower
 * @apiName Add-User-Follow-POST
 * @apiGroup User
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *{
 *      "follower":"61a468b0d4e55c5760611108"
 *  }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Added User follower successfully"
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
   userRouter.post("/follow",
   AuthMiddleware.verifyToken,
   AuthMiddleware.findUser,
   UserController.addUserFollower);

   /******************************************************************************
 *                     Get user followers - "get /api/user/followers"
 ******************************************************************************/
/**
 * @api {GET} /api/user/followers Get user followers
 * @apiName Get-User-Follows-GET
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
 *       "message": "User followers fetch successfully"
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
   userRouter.get("/followers",
   AuthMiddleware.verifyToken,
   AuthMiddleware.findUser,
   UserController.getUserFollowers);

/******************************************************************************
 *                     Get user following - "get /api/user/following"
 ******************************************************************************/
/**
 * @api {GET} /api/user/following Get user following
 * @apiName Get-User-following-GET
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
 *       "message": "User following fetch successfully"
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
userRouter.get("/following",
AuthMiddleware.verifyToken,
AuthMiddleware.findUser,
UserController.getUserFollowing);

export default userRouter;
