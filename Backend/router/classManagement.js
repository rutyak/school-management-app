const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const Class = require("../model/ClassSchema");

const router = express.Router();

router.post("/create/class", createController(Class));

router.get("/fetch/class", fetchController(Class));

router.put("/update/class/:id",updateController(Class));

router.delete("/delete/class/:id",deleteController(Class));

module.exports = router;
