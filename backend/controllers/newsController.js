// ./controllers/newsController.js

const asyncHandler = require("express-async-handler");


// 쿠키 정보와 DB에 저장된 사용자 일치하면 해당 프로필 불러오기 
// GET /news
const getNaverNews = asyncHandler(async (req, res) => {
    

    try{
        

    }catch(error){
        return res.status(500).send("서버 오류가 발생했습니다.");
    }
}); 

module.exports = { getUserProfile };
