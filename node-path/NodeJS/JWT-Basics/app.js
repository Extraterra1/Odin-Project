const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

app.post("/api/posts", isLoggedIn, (req, res) => {
  res.json({
    message: "Post created",
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

const isLoggedIn = (req, res, next) => {
  // Verify token
  // Get auth header
  const bearerHeader = req.headers.authorization;
};

app.listen(3000, () => console.log("listening on 3000"));
