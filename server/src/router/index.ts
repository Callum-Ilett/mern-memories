import { Router } from "express";
import postsRouter from "./posts";

const router = Router();

router.get("/", (req, res) => res.send("Express + TypeScript Server"));

router.use("/posts", postsRouter);

export default router;
