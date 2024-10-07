const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const Student = require("../model/StudentSchema");
const upload = require("../storage/multer");

const router = express.Router();

router.post("/create/student", createController(Student))

router.get("/fetch/student", fetchController(Student));

router.put("/update/student/:id",updateController(Student));

router.delete("/delete/student/:id",deleteController(Student));

module.exports = router;
