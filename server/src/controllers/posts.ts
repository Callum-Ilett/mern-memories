import { RequestHandler } from "express";
import { Post as PostSchema } from "@memories/types";
import Post from "../models/post";

export const getPosts: RequestHandler = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch all posts" });
  }
};

export const createPost: RequestHandler = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: "Failed to create post" });
  }
};
