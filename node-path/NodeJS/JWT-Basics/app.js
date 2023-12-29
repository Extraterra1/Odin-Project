const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());

const setToken = (req, res, next) => {
  // Verify token
  // Token format is "Bearer <token>"
  // Get auth header
  const bearerHeader = req.headers.authorization;

  // Check if bearer is undefined
  if (typeof bearerHeader === "undefined") return res.sendStatus(403);

  // Get token from string
  const bearerToken = bearerHeader.split(" ")[1];

  // Set the token
  req.token = bearerToken;
  next();
};

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

app.post("/api/posts", setToken, (req, res) => {
  jwt.verify(req.token, "cyberpunk 2077", (err, authData) => {
    if (err) return res.status(403).json(err);
    res.json({
      message: "Post created",
      authData,
    });
  });
});

app.post("/api/login", (req, res) => {
  // Mock User
  const user = {
    id: 1,
    username: "john",
    email: "john@gmail.com",
  };
  jwt.sign({ user }, "cyberpunk 2077", (err, token) => {
    if (err) return res.json({ err });
    res.json({ token });
  });
});

app.listen(3000, () => console.log("listening on 3000"));
