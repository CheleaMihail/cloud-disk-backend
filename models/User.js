import { Schema, model, ObjectId } from "mongoose";

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: String, default: 1024 ** 3 * 10 },
  usedSpace: { type: String, default: 0 },
  avatar: String,
  files: [{ type: ObjectId, ref: "File" }],
});

export default model("User", User);
