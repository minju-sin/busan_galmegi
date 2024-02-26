const express = require("express");
const {CreateTalk, getAllTalks, getIdTalk} = require("../controllers/talksController");
const router = express.Router();

// 마!톡 게시판
router
.route("/")
    .get(getAllTalks)
    .post(CreateTalk);

router
.route("/:id")
    .get(getIdTalk);

module.exports = router;