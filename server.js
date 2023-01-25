import express from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";

// Connect to MongoDB
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

const app = express();
app.listen(APP_PORT, () => console.log(`Server is Running at ${APP_PORT}.`));
