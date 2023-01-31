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
 *          Remove user unfollow - "Remove /api/user/unfollow"
 ******************************************************************************/
/**
 * @api {PUT} /api/user/unfollow update user unfollow
 * @apiName PUT-User-unFollow-PUT
 * @apiGroup User
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 * { 
 *      "unfollow":"61a468b0d4e55c5760611108"
 *  }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "User unfollow updated successfully"
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
userRouter.put("/unfollow",
AuthMiddleware.verifyToken,
AuthMiddleware.findUser,
UserController.updateUserFollow);



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

/******************************************************************************
 *                     Update user password - "PUT /api/user/profile/password"
 ******************************************************************************/

/**
 * @api {PUT} /api/user/profile/password Update User Password
 * @apiName Update-User-Password
 * @apiGroup User
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  *   @apiExample Sample-Request:
 *   {
 *      "currentPassword": "currentPassword",
 *      "password": "password",
 *      "confirmPassword": "password"
 *    }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "User profile updated Successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "something went wrong"
 *       "data":null
 *     }
 */
     userRouter.put("/profile/password",
    AuthMiddleware.verifyToken,
    AuthMiddleware.findUser,
    UserController.updateUserPassword);

 /******************************************************************************
 *               User forgot  password - "PUT  /api/user/forgot/password"
 ******************************************************************************/
/**
 * @api {PUT} /api/user/forgot/password Update Forgot User Password
 * @apiName PUT-Forgot-User-Password
 * @apiGroup User
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  *   @apiExample Sample-Request:
 *   {
 *      "password": "password",
 *      "confirmPassword": "password"
 *    }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "User password updated Successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "something went wrong"
 *       "data":null
 *     }
 */
userRouter.put(
   "/profile/forgot/password",
   AuthMiddleware.verifyToken,
   AuthMiddleware.findUser,
   UserController.updateForgotUserPassword
 );

/******************************************************************************
 *             Add content report issue - "PUT  /api/user/report/issue"
 ******************************************************************************/
/**
 * @api {POST} /api/user/report/issue  Add content report issue
 * @apiName POST-Content-Report-Issue
 * @apiGroup User
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  @apiExample Sample-Request:
 *   {
 *      "title": "title",
 *      "description": "description"
 *    }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Added content report issue Successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "something went wrong"
 *       "data":null
 *     }
 */
userRouter.post("/report/issue",
   AuthMiddleware.verifyToken,
   AuthMiddleware.findUser,
   UserController.addContentReportIssue);

export default userRouter;
