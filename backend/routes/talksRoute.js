const express = require("express");
const {CreateTalk, getAllTalks} = require("../controllers/talksController");
const router = express.Router();

// 마!톡 게시판
router
.route("/")
    .get(getAllTalks)
    .post(CreateTalk);

module.exports = router;