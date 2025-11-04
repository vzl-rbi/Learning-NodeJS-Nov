// const express = require('express');
// const app = express();
import express from "express";
const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("<h1> This is Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h2> About Page</h2>");
});

app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
