import { FeedController } from "../../controllers/index";
import { Router } from "express";
import { upload, AuthMiddleware} from "../../middlewares/index";

const feedRouter = Router();

/******************************************************************************
 *                     Add Feed Content - "POST /api/feed"
 ******************************************************************************/

/**
 * @api {POST} /api/feed add feed content
 * @apiName Admin-Add-Settings-POST
 * @apiGroup Feed
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *{
 *       "title": "title",
 *       "subTitle":"subTitle",
 *       "description": "description",
 *       "category": "category",
 *       "subCategory":"subCategory",
 *       "monetizationModeType": "free"/"paid"/"premium",
 *        "curriculum":[
 *            "title": "title",
 *            "description": "description",
 *             "video": "video",
 *             "thumbnailImage": "thumbnailImage"
 *             ],
 *         "type":"course"/"content",
 *       "monetization": [
 *          {
 *               "allowAudienceSupport": true/false,
 *               "paid": {
 *                    "price": "price",
 *                   "allowReshare": true/false,
 *                   "premium": [
 *                       "premium1",
 *                       "premium2",
 *                       "premium3"
 *                   ]
 *               },
 *               "premium": [
 *                       "premium1",
 *                       "premium2",
 *                       "premium3"
 *                   ]
 *           }
 *       ],
 *       "tag": ["tag-1","tag-2"],
 *       "thumbnailImage": "thumbnailImage",
 *       "image": ["image-1","image-2"],
 *       "video": "video"
 *  }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Feed content saved successfully !!"
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
feedRouter.post("/", upload.any(), FeedController.postFeedContent);

/******************************************************************************
 *                     Get Feed Contents - "GET /api/feed"
 ******************************************************************************/
/**
 * @api {GET} /api/feed get feed
 * @apiName Feed-Get-feed-GET
 * @apiGroup Feed
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
 *       "message": "All Feed contents fetched successfully !!",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 unauthorized request
 *     {
 *        "status": false
 *        "error": true,
 *        "message": "Something went wrong"
 *     }
 */
feedRouter.get("/", FeedController.fetchFeedContent);
feedRouter.get("/", FeedController.fetchAllFeedContent);

/******************************************************************************
 *                     Update Feed status Active/Inctive  - "Update /api/feed/status"
 ******************************************************************************/
/**
 * @api {UPDATE} /api/Feed/status update feed
 * @apiName Feed-Update-feed-Status-UPDATE
 * @apiGroup Feed
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for JSON.
 *
 * {
 *       "feedId":"feedId",
 *       "status": "title"
 * }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Feed Status updated successfully !!",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 unauthorized request
 *     {
 *        "status": false
 *        "error": true,
 *        "message": "Something went wrong"
 *     }
 */
 feedRouter.put("/status", FeedController.updateFeedStatus);

 /******************************************************************************
 *                     add feed review - "POST /api/feed/review"
 ******************************************************************************/
/**
 * @api {POST} /api/feed/review add Feed review 
 * @apiName add Feed review -POST
 * @apiGroup Feed
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 *  @apiExample Sample-Request:
 *   {
 *      "feedId":"feedId",
 *      "likes":true,
 *      "dislikes":false,
 *      "review":{  
 *          "comment":"comment",
 *          "stars": 3,
 *      }
 *   }
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Feed review added successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Something went wrong"
 *     }
 */
feedRouter.post("/review",
AuthMiddleware.verifyToken,
AuthMiddleware.findUser,
FeedController.addFeedReview,
);

 /******************************************************************************
 *                     get feed review - "GET /api/feed/review?_id=63ce66ceff95c357646caaed"
 ******************************************************************************/
/**
 * @api {GET} api/feed/review?_id=63ce66ceff95c357646caaed get Feed review 
 * @apiName get Feed review -GET
 * @apiGroup Feed
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
 *       "message": "Feed review fetch successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Something went wrong"
 *     }
 */
feedRouter.get("/review",
AuthMiddleware.verifyToken,
FeedController.getFeedReview,
);

 /******************************************************************************
 *                     Delete feed review - "DELETE /api/feed/review?_id=63ce66ceff95c357646caaed"
 ******************************************************************************/
/**
 * @api {DELETE} api/feed/review?_id=63ce66ceff95c357646caaed delete feed review 
 * @apiName Delete Feed review -DELETE
 * @apiGroup Feed
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
 *       "message": "Feed deleted successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Something went wrong"
 *     }
 */
feedRouter.delete("/",
AuthMiddleware.verifyToken,
FeedController.deleteFeed,
);

/******************************************************************************
 *                     Add feed favourite - "POST /api/feed/favourite"
 ******************************************************************************/

/**
 * @api {POST} /api/feed Add feed favourite
 * @apiName Add-feed-favourite POST
 * @apiGroup Feed
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 *
 * @apiExample Sample-Request:
 *{
 *       "user": "63ce31fa942384a654254401",
 *       "feed":"63c937044d5070f99ad06503"
 *  }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "Feed favourite saved successfully !!"
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
    feedRouter.post("/favourite", 
    AuthMiddleware.verifyToken,
    AuthMiddleware.findUser,
    FeedController.addFeedFavourite);

/******************************************************************************
 *                     Get favourites feed - "GET /api/feed/favourite"
 ******************************************************************************/
/**
 * @api {GET} api/feed/favourite get favourites Feed 
 * @apiName get Feed favourites-GET
 * @apiGroup Feed
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
 *       "message": "favourites feed fetch successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Something went wrong"
 *     }
 */
feedRouter.get("/favourite",
AuthMiddleware.verifyToken,
AuthMiddleware.findUser,
FeedController.getFeedFavourite,
);

/******************************************************************************
 *           Update favourite status - "UPDATE /api/feed/favourite"
 ******************************************************************************/
/**
 * @api {UPDATE} api/feed/favourite UPDATE favourite Feed 
 * @apiName UPDATE Feed favourites-UPDATE
 * @apiGroup Feed
 *
 * @apiSuccess {boolean} error for checking the error.
 * @apiSuccess {String} message for information.
 * @apiSuccess {object} data for payload.
 * 
 *  * @apiExample Sample-Request:
 *    {
 *       "_id": "63ce31fa942384a654254401",
 *       "favourite":true/false
 *    }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": true,
 *       "error": false,
 *       "message": "favourite status updated successfully",
 *       "data": object
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 unauthorized request
 *     {
 *        "status": false
 *       "error": true,
 *       "message": "Something went wrong"
 *     }
 */
feedRouter.put("/favourite",
AuthMiddleware.verifyToken,
AuthMiddleware.findUser,
FeedController.updateFeedFavouriteStatus,
);



export default feedRouter;
