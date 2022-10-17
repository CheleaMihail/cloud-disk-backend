import { Router } from "express";

import { authMiddleware } from "../middleware/auth.middleware.js";
import fileController from "../controllers/fileController.js";

const router = new Router();

router.post("", authMiddleware, fileController.createDir);
router.post("/upload", authMiddleware, fileController.uploadFile);
router.post("/avatar", authMiddleware, fileController.uploadAvatar);
router.get("", authMiddleware, fileController.fetchFiles);
router.get("/download", authMiddleware, fileController.downloadFile);
router.get("/search", authMiddleware, fileController.searchFile);
router.delete("/", authMiddleware, fileController.deleteFile);
router.delete("/avatar", authMiddleware, fileController.deleteAvatar);

export default router;
