import { FeedController } from "../../controllers/index";
import { Router } from "express";
import { upload, verifyUserToken } from "../../middlewares/index";

const feedRouter = Router();
feedRouter.use(verifyUserToken);

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
 *       "description": "description",
 *       "category": "category",
 *       "monetizationModeType": "free"/"paid"/"premium",
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
 *                     Get Feed Contents - "GET /api/Feed"
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
feedRouter.get("/:id?/:page/:perPage?", FeedController.fetchFeedContent);
feedRouter.get("/", FeedController.fetchAllFeedContent);

export default feedRouter;
