const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const Teacher = require("../model/TeacherSchema");
const upload = require("../storage/multer");

const router = express.Router();

router.post("/create/teacher",upload.single("photo"), createController(Teacher));

router.get("/fetch/teacher", fetchController(Teacher));

router.put("/update/teacher/:id",updateController(Teacher));

router.delete("/delete/teacher/:id",deleteController(Teacher));

module.exports = router;
