import { model, Schema } from "mongoose";

const IssueReportSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, required: true, trim: true, lowercase: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const IssueReport = model("IssueReport", IssueReportSchema);

export { IssueReport };
