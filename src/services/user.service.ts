import { User, Follow } from "../models";

export class UserService {
  constructor() {}

  public async getUserProfile(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id } = requestData;
        const user = await User.findById({_id});
        if (user) {
          return resolve({status: true, message:"User profile fetch successfully",  data: user});
        } else {
            return resolve({status: false, message:"User not found"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }

  public async updateUserProfile(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id, name, email, phone, role } = requestData;
        const request = { name, email, phone, role }
        const user = await User.findByIdAndUpdate(_id, request);
        if (user) {
          return resolve({status: true, message:"User profile updated successfully"});
        } else {
            return resolve({status: false, message:"Something went wrong"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }

  public async deleteUserProfile(params: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id } = params;
        const user = await User.findByIdAndUpdate(_id, { isDeleted: false });
        if (user) {
          return resolve({status: true, message:"User profile deleted successfully"});
        } else {
            return resolve({status: false, message:"Something went wrong"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }

  public async addUserFollower(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = requestData;
        const { follower } = requestData.body;

        let follow = new Follow({
            follower: follower,
            followee: user._id,
        });
        const data = await follow.save();
        if (data) {
          return resolve({status: true, data, message:"added user follower successfully"});
        } else {
            return resolve({status: false, message:"Something went wrong"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }
}
