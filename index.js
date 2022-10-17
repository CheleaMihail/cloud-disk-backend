import express from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRouter from "./routes/auth.routes.js";
import fileRouter from "./routes/file.routes.js";
import { filePath } from "./middleware/filePath.middleware.js";

const app = express();
const path = require("path");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const PORT = process.env.PORT || config.get("serverPort");

app.use(cors(corsOptions));
app.use(fileUpload({}));
app.use(filePath(path.resolve(__dirname, "files")));
app.use(express.json());
app.use(express.static("static"));
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (error) {}
};

start();
