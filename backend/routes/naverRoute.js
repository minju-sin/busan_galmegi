const express = require("express");
const {getNaverButton, getNaverCallback} = require("../controllers/naverController");
const router = express.Router();

// 네이버 간단로그인
router
.route("/login")
    .get(getNaverButton);

router
.route("/oAuth/callback")
    .get(getNaverCallback);


module.exports = router;