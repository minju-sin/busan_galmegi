const express = require("express");
const {getNaverNews} = require("../controllers/newsController");
const router = express.Router();

// 뉴스 검색 결과 
router
.route("/")
    .get(getNaverNews);

module.exports = router;