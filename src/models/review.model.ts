import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const ReviewSchema: Schema = new Schema(
    {
        comment: { type: String },
        stars: { type: Number, min: 0, default: 0 },
        user: { type: Schema.Types.ObjectId, ref: "User" },
        feed: { type: Schema.Types.ObjectId, ref: "Feed" },
        reviewedOn: { type: Date, default: new Date() },
        like: { type: Number, default: 0 },
        dislike: { type: Number, default: 0 },
        createdAt: { type: Date, default: new Date() },
    } 
);

interface IReview extends mongoose.Document {
    comment: String,
    stars: Number,
    user: String,
    reviewedOn: Date
}

const Review = model<IReview>("Review", ReviewSchema);

export { Review, IReview };
