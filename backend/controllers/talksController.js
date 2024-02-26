// ./controllers/talksController.js

const asyncHandler = require("express-async-handler");
const Talk = require("../models/talkModel");


// 마!톡 글쓰기 
// POST /talks
const CreateTalk = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { title, comment, nickname } = req.body;
    if(!title || !comment || !nickname){
        return res.send("필수 값이 입력되지 않았습니다.");
    }

    // 값 저장시키기
    const newTalk = await Talk.create({
        title,
        comment,
        nickname
    });
    res.send("글쓰기 성공")
}); 

module.exports = { CreateTalk };
