const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// request logger
app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api/notifications", notificationRoutes);

module.exports = app;