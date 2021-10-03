import { model, Schema, SchemaOptions } from "mongoose";
import { Post as PostSchema } from "@memories/types";

const schemaOptions: SchemaOptions = {
  timestamps: true,
};

const postSchema = new Schema<PostSchema>(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount: { type: Number, default: 0 },
    selectedFile: String,
  },
  schemaOptions
);

const Post = model<PostSchema>("Post", postSchema);

export default Post;
