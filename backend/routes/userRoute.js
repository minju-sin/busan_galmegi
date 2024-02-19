const express = require("express");
const { saveUserData, getUserProfile } = require("../controllers/userController");
const router = express.Router();

// 회원 정보 
router
.route("/")
    .post(saveUserData);

router
.route("/:id")
    .get(getUserProfile)

module.exports = router;