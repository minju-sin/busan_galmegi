const express = require("express");
const { saveUserData } = require("../controllers/userController");
const router = express.Router();

// 회원 정보 
router
.route("/")
    .post(saveUserData);


module.exports = router;