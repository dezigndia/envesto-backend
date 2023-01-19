import { Users } from "../models";

export class UserService {
  constructor() {}

  public async getUserProfile(requestData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id } = requestData;
        const user = await Users.findById({_id});
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
        const user = await Users.findByIdAndUpdate(_id, request);
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

}
