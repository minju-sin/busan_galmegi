// ./controllers/talksController.js

const asyncHandler = require("express-async-handler");
const Talk = require("../models/talkModel");


// 마!톡 게시판
// GET /talks
const getAllTalks = asyncHandler (async (req, res) => {
    
    // 저장된 게시글 전체를 찾는다.
    const talks = await Talk.find();

    // 저장된 게시글 출력한다.
    res.send(talks);
});


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
    res.send("글쓰기 성공");
}); 


// 마!톡 게시글 보기
// GET /talks:{id}
const getIdTalk = asyncHandler(async (req, res) => {
    try {
        // 해당 _id의 값을 가진 게시글 가져오기 
        const talk = await Talk.findById(req.params.id);

        if (!talk) {
            // 게시글을 찾지 못한 경우 404 에러 응답
            res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }

        // 게시글을 성공적으로 찾은 경우 클라이언트에 응답으로 전송
        res.json(talk);
    } catch (error) {
        // 오류 발생 시 500 에러 응답
        res.status(500).json({ message: error.message });
    }
});

// 마!톡 게시글 수정
// PUT /talks:{id}
const putIdTalk = asyncHandler(async (req, res) => {
    try{
        const {title, comment} = req.body;

        // 해당 _id의 값을 가진 게시글 수정하기
        const talk = await Talk.findById(req.params.id);

        if(!talk){
            res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }

        talk.title = title;
        talk.comment = comment;

        talk.save();
        res.json(talk);
    }catch (error) {
        // 오류 발생 시 500 에러 응답
        res.status(500).json({ message: error.message });
    }
});


// 마!톡 게시글 삭제
// DELETE /talks/:{id}
const deleteIdTalk = asyncHandler(async (req, res) => {

    try{

        // 해당 _id의 값을 가진 게시글 삭제하기
        const talk = await Talk.findById(req.params.id);

        if(!talk){
            res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }


        // 삭제 
        await Talk.deleteOne();
        res.send(`삭제`);
    }catch (error) {
        // 오류 발생 시 500 에러 응답
        res.status(500).json({ message: error.message });
    }

});

module.exports = { getAllTalks, CreateTalk, getIdTalk, putIdTalk, deleteIdTalk };
