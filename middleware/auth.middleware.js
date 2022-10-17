import jwt from "jsonwebtoken";
import config from "config";

export const authMiddleware = (req, res, next) => {
  if (req.method === "options") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Autentification error" });
    }
    const decoded = jwt.verify(token, config.get("secretKey"));
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error" });
  }
};
