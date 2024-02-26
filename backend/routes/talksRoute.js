const express = require("express");
const {CreateTalk, getAllTalks, getIdTalk, putIdTalk, deleteIdTalk} = require("../controllers/talksController");
const router = express.Router();

// 마!톡 게시판
router
.route("/")
    .get(getAllTalks)
    .post(CreateTalk);

router
.route("/:id")
    .get(getIdTalk)
    .put(putIdTalk)
    .delete(deleteIdTalk);

module.exports = router;