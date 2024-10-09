const express = require("express");
const userCreateController = require("../controller/userCreateController");
const userAuthController = require("../controller/userAuthController");
const userValidateController = require("../controller/userValidateController");
const userResetPassword = require("../controller/userResetPassword");
const router = express.Router();

router.post("/signup", userCreateController);

router.post("/login", userAuthController);

router.post("/validate", userValidateController);

router.patch("/resetpassword", userResetPassword);

module.exports = router; 