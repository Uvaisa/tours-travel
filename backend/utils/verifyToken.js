import jwt from "jsonwebtoken";
const verifyToken = (req, resp, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return resp
      .status(401)
      .json({ success: false, message: "you are not authorize" });
  }
  // if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) {
      return resp
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }
    req.user = user;
    next(); // don't forget to call next
  });
};
export const verifyUser = (req, resp, next) => {
  verifyToken(req, resp, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return resp
        .status(401)
        .json({ success: false, message: "you are not authenticated" });
    }
  });
};
export const verifyAdmin = (req, resp, next) => {
  verifyToken(req, resp, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return resp
        .status(401)
        .json({ success: false, message: "you are not authorize" });
    }
  });
};
