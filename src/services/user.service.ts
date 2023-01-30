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
        if(data){
          let _id = user._id
        await User.findByIdAndUpdate(_id, { $push: { followers: data.followee, following: user._id } }, { new:true });
        }
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

  public async updateUserFollow(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = requestData;
        const { unfollow } = requestData.body;
          let _id = user._id
        const data = await User.findByIdAndUpdate(_id, { $pull: { followers: unfollow, followee: _id } }, { new:true });
        
        if (data) {
          return resolve({status: true, data, message:" user unfollowed successfully"});
        } else {
            return resolve({status: false, message:"Something went wrong"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }

  public async getUserFollowers(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = requestData;
        const data = await User.findOne({_id:user._id})
        .populate([{ path: 'followers' }])
        if (data) {
          return resolve({status: true, message:"User followers fetch successfully", data});
        } else {
            return resolve({status: false, message:"User followers not found"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }

  public async getUserFollowing(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = requestData;
        const data = await User.findOne({_id:user._id})
        .populate([{ path: 'following' }])
        if (data) {
          return resolve({status: true, message:"User following fetch successfully", data});
        } else {
            return resolve({status: false, message:"User following not found"});
        }
      } catch (error: any) {
        return reject(error.errors);
      }
    });
  }

  public async updateUserPassword(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id } = requestData.user;
        const { currentPassword, password, confirmPassword } = requestData.body;
        const user:any = await User.findById(_id);
        if (user) {
          if (user.password !== currentPassword) {
            resolve({
              status: false,
              message: "Current password not matched"
            })
          } else if (password !== confirmPassword) {
            resolve({
              status: false,
              message: "Password and confirm password needs to be same"
            })
          } else {
            await User.findByIdAndUpdate(_id, { password });
            resolve({
              status: true,
              message: "User password changed successfully"
            })
          }
        } else {
          resolve({
            status: false,
            message: "User not found"
          })
        }

      } catch (error) {
        reject(error);
      }
    })
  }
}
