import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR, CONFLICT, OK, StatusCodes } from 'http-status-codes';
import { IFeed } from '../interfaces/feed.interface';
import { FeedDal } from '../dal/feed.dal';
import { getUserFromRequest } from "../helpers/request.helper";

const feed = new FeedDal();

export class FeedController {
    public static async postFeedContent(req: any, res: Response) {
        try {
            let feedData: IFeed = {...req.body};
            const user = getUserFromRequest(req); 
            const data: any = await feed.postFeed(feedData, req.files, user);
            if(data.status) return res.status(CREATED).json(data);
            else return res.status(CONFLICT).json(data);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({error});
        }
    }

        
    public static async fetchFeedContent(req: Request, res: Response) {
        try {
            const response: any = await feed.fetchFeedList(req);
            if(response.status) return res.status(OK).json(response);
            else return res.status(CONFLICT).json(response);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({error});
        }
    }

            
    public static async updateFeedStatus(req: Request, res: Response) {
        try {
            const user = getUserFromRequest(req); 
            const response: any = await feed.updateFeedStatus(req.body,user);
            if(response.status) return res.status(OK).json(response);
            else return res.status(CONFLICT).json(response);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({error});
        }
    }
    
    public static async fetchAllFeedContent(req: Request, res: Response) {
        try {
            const response: any = await feed.fetchAllFeedList(req);
            if(response.status) return res.status(OK).json(response);
            else return res.status(CONFLICT).json(response);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({error});
        }
    }

    public static async addFeedReview(req: Request, res: Response) {
        try {
            const data: any = await feed.addFeedReview(req);
            if (data.status) {
                return res.status(StatusCodes.OK).json(data);
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).json(data);
            }
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({error});
        }
    }

    public static async getFeedReview(req: Request, res: Response) {
        try {
            const data: any = await feed.getFeedReview(req);
            if (data.status) {
                return res.status(StatusCodes.OK).json(data);
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).json(data);
            }
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({error});
        }
    }
}