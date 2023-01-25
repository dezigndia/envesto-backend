import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const favouriteFeedSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        feed: { type: Schema.Types.ObjectId, ref: "Feed" },
        favourite: {type: Boolean, default: true },
    } ,
    { timestamps: true }
);

interface IFavouriteFeed extends mongoose.Document {
    user:String,
    feed: String,
    favourite: Boolean,
}

const FavouriteFeed = model<IFavouriteFeed>("FavouriteFeed", favouriteFeedSchema);

export { FavouriteFeed, IFavouriteFeed };
