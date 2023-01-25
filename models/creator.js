import mongoose from "mongoose";
const Schema = mongoose.Schema;

const creatorSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    supporters: {
      type: Array,
      default: [],
    },
    posts: {
        type: Array,
        default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Creator", creatorSchema, "creators");
