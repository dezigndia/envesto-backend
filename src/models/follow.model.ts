import { Schema, model } from "mongoose";

var FollowSchema = new Schema(
  {
    follower: { type: Schema.Types.ObjectId, ref: "User" },
    followee: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {timestamps: true}
);

const Follow = model("Follow", FollowSchema);

export { Follow };
