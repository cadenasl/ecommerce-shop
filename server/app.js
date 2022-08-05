require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(logger("dev"));

const Port = process.env.port || 4001;
app.listen(Port, () => {
  console.log(`server running on port ${Port}`);
});
