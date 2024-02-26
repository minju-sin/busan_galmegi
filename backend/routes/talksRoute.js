const express = require("express");
const {CreateTalk} = require("../controllers/talksController");
const router = express.Router();

// 마!톡 게시판
router
.route("/")
    .post(CreateTalk);

module.exports = router;