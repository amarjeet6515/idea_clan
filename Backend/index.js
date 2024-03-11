const express = require("express");

const cors = require("cors");

const { connection } = require("./config/connection");
// const { Router } = require("./routers/routers");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("", Router);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server connection with ${process.env.PORT}`);
  } catch (err) {
    console.log("not connected");
  }
});