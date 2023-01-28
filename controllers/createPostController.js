import bcrypt from "bcrypt";
import { Creator } from "../models";

const createPostController = {
  async createPost(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.params);
      const { title, description, creatorId } = req.body;
      const creator = await Creator.findById(creatorId);
      const newPost = {
        title,
        description,
      };
      await creator.updateOne({ $push: { posts: newPost } });
      res.status(200).json("user has been followed");
    } catch (error) {
      next(error);
    }
  },
};

export default createPostController;
