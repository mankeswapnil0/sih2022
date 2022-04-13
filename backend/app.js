const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/error");

app.use(express.json());

//config
dotenv.config({ path: "backend/config/config.env" });

//route import
const user = require("./routes/userRoute");
const puppet = require("./routes/scrapperRoutes");

app.use("/api/v1", user);
app.use("/api/v1", puppet);

app.use(errorMiddleware);

module.exports = app;
