const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// database connection

mongoose.connect(process.env.DB_CONNECT).then(() => {
  console.log(`Database connection is successful`);
});

// routes

// posting database
// app.use();

//
app.get("/", (req, res) => {
  res.send("Server is On");
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
