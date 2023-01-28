import bcrypt from "bcrypt";
import { Creator } from "../../models";

const registerController = {
  async register(req, res, next) {
    try {
      console.log(req.body);
      const { email, password, username } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await Creator.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },
};

export default registerController;
