import express from "express";
import jwt from "jsonwebtoken";
import mockUser from "./mockUser.js";
import { signToken, tokenVerifier } from "./authenticator.js";

const app = express();

app.get("/create-auth", (req, res) => {
  try {
    const token = signToken;
    console.log(`Auth for ${mockUser.name} was created`);
    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    console.log("Token verified with success");
    res.json({
      message: "token validated with success",
      token: token,
    });
  } catch (error) {
    console.error("An error has occurred:", error);
  }
});
app.get("/auth", tokenVerifier, (req, res) => {
  console.log("Token verified with success");
  res.json({
    message: "hey, JWT works fine",
    name: mockUser.name,
    email: mockUser.email,
  });
});
app.listen(3000, () => {
  console.log("Server online and listening");
});
