const express = require("express");
const {getUserProfile} = require("../controllers/userController");
const router = express.Router();

// 사용자 정보
router
.route("/:id")
    .get(getUserProfile);

module.exports = router;