import { Feed, Review } from "../models/index";
import { Pagination, IRequest, IFeed } from '../interfaces';
import { getUserFromRequest } from "../helpers/request.helper";
import { Request } from "express";
import { FileUtils } from "../utils";
import { json } from "node:stream/consumers";

export class FeedDal {
  public async postFeed(data: IFeed, files: any, user: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const image = [];
        for (let file of files) {
          const fieldName = file.fieldname;
          const fileLocation = file.location;
          switch (fieldName) {
            case "thumbnailImage":
              data.thumbnailImage = fileLocation;
              break;
            case "image":
              image.push(fileLocation);
              break;
            case "video":
              data.video = fileLocation;
          }
        }

        let curriculumData = [];
        if (data.type === "course") {
          let curriculum = JSON.parse(data.curriculum.toString());
          for (let file of curriculum) {
            const video = await FileUtils.saveFile(file.video);
            const thumbnailImage = await FileUtils.saveFile(
              file.thumbnailImage
            );
            curriculum.video = video;
            curriculum.thumbnailImage = thumbnailImage;
            curriculumData.push({
              thumbnailImage,
              video,
              title: file.title,
              description: file.description,
            });
          }
          data.curriculum = curriculumData;
        }
        data.addedBy = user._id;
        let monetization = JSON.parse(data.monetization.toString());
        data.monetization = monetization;
        const newFeed = new Feed(data);
        const saveFeed = await newFeed.save();
        return resolve({
          data: saveFeed,
          message: "Feed content saved successfully !!",
          status: true,
        });
      } catch (error: any) {
        return reject(error);
      }
    });
  }

  public fetchFeedList(data: IRequest) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = getUserFromRequest(data as Request);
        const pagination: Pagination = data.params;
        const limit =
          Math.abs(Number(pagination.perPage)) || process.env.PERPAGE;
        const page = Math.max(0, Number(pagination.page));
        const feedId = data.params.id;
        const condition: { [key: string]: string } = {};
        if (feedId) {
          condition["_id"] = feedId;
        }
        if (user._id) {
          condition["addedBy"] = user._id;
        }
        const lists = await Feed.find(condition).sort({ createdAt: "desc" });
        return resolve({ lists, status: true });
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    });
  }

  public updateFeedStatus(data: any, user: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { feedId, status } = data;
        console.log(status);
        if (user.role != "ADMIN") {
          return resolve({ status: false, message: "User should be ADMIN" });
        }

        const condition: { [key: string]: string } = {};
        if (feedId) {
          condition["_id"] = feedId;
        }
        if (status === true || status === false) {
          condition["status"] = status;
        }

        console.log(condition);
        const updateData = await Feed.updateOne(condition);
        return resolve({
          status: true,
        //   data: updateData,
          message: "Feed Status updated successfully!!",
        });
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    });
  }

  public fetchAllFeedList(data: IRequest) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = getUserFromRequest(data as Request);
        const pagination: Pagination = data.params;
        const limit =
          Math.abs(Number(pagination.perPage)) || process.env.PERPAGE;
        const page = Math.max(0, Number(pagination.page));
        const feedId = data.params.id;
        const condition: { [key: string]: string } = {};
        if (feedId) {
          condition["_id"] = feedId;
        }
        if (user._id) {
          condition["addedBy"] = user._id;
        }
        const lists = await Feed.find(condition).sort({ createdAt: "desc" });
        return resolve({
          status: true,
          data: lists,
          message: "All Feed contents fetched successfully !!",
        });
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    });
  }

  public async addFeedReview(requestData: any) {
    return new Promise(async (resolve, reject) => {
     
      try {
        const { feedId, review, like, dislike } = requestData.body;
        const { comment, stars } = review;
        const { user } = requestData;

        const newReview = new Review({
          comment,
          stars,
          user: user._id,
          like,
          dislike,
          feed: feedId,
        });
        const addedReview = await newReview.save();
        if (addedReview) {
          const review = await Review.find({"feed": feedId }).sort({
            createdAt: -1,
          });
          resolve({
            status: true,
            data: addedReview,
            message: "Review added successfully",
          });
        } 
       
        else {
          resolve({
            status: false,
            message: "Unable to add review",
          });
        }
       
      } catch (error) {
        reject(error);
      }
    });
  }

  public async getFeedReview(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id } = requestData.query;
       const data = await Review.findById(_id)
        if (data) {
          resolve({
            status: true,
            data: data,
            message: "Review list fetch successfully",
          });
        } 
        else {
          return resolve({status: false, message:"Something went wrong"});
        }
       
      } catch (error) {
        console.log(error)
        reject(error);
      }
    });
  }

  public async deleteFeed(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id } = requestData;
       const data = await Feed.findByIdAndUpdate(_id, { isDeleted: true }, { new: true });
        if (data) {
          resolve({
            status: true,
            data: data,
            message: "Feed deleted successfully",
          });
        } 
        else {
          return resolve({status: false, message:"Something went wrong"});
        }
       
      } catch (error) {
        reject(error);
      }
    });
  }

}