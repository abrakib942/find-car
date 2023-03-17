const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// database connection

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fcdjjm2.mongodb.net/road-rover`
  )
  .then(() => {
    console.log(`Database connection is successful`);
  });

// routes
const userRoute = require("./routes/userRoute");
const vehicleRoute = require("./routes/vehicleRoute");
const accessoriesRoute = require("./routes/accessoriesRoute");

app.get("/", (req, res) => {
  res.send("Server is On");
});

app.use("/api/user", userRoute);
app.use("/api/vehicle", vehicleRoute);
app.use("/api/accessories", accessoriesRoute);

//

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
