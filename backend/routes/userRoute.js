const express = require("express");
const { registerUser, loginUser, logout, getUserDetails } = require("../controller/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/profile").post(getUserDetails);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

module.exports = router