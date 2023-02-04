const express = require("express");
const app = express();
const PORT = process.env.PORT || 8003;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world v4",
  });
});

module.exports = app;
