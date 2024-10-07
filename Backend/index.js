const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const classRouter = require("./router/classManagement");
const studentRouter = require("./router/studentManagement");
const teacherRouter = require("./router/teacherManagement");
const userAuthRouter = require("./router/authentication");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
const url = process.env.MongoDB_URL;

app.use(express.json());
app.use(cors());

mongoose
  .connect(url)
  .then(() => {
    console.log("mongodb connection established...");
  })
  .catch((error) => {
    console.error("error in connection...");
  });

app.use(classRouter);
app.use(teacherRouter);
app.use(studentRouter); 
app.use(userAuthRouter);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
