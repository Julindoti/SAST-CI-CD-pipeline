import jwt from "jsonwebtoken";
import mockUser from "./mockUser.js";

export const signToken = jwt.sign(
  { id: mockUser.id, name: mockUser.name, email: mockUser.email },
  process.env.JWT_SECRET,
  { expiresIn: "1h" },
);
export const tokenVerifier = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    console.error("No token has been provided");
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) {
      console.log("The token provided is invalid");
      return res.sendStatus(403);
    }
    res.user = mockUser;
    next();
  });
};
