import { Router } from "express";
import { createPost, getPosts } from "../controllers/posts";

const postsRouter = Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", createPost);

export default postsRouter;
