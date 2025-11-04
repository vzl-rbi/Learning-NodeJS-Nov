// const express = require('express');
// const app = express();
import express from "express";
const app = express();
const PORT = 8000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  const sum = " Above is Two Number Sum ";
  const add = "I love math";
  res.render("about", { data: sum, add });
});

app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
