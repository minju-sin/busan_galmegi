// ./controllers/userController.js

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");


// 쿠키 정보와 DB에 저장된 사용자 일치하면 해당 프로필 불러오기 
// GET /users/:{id}
const getUserProfile = asyncHandler(async (req, res) => {
    const userData = req.cookies.userData;

    try{
        if(!userData){
            return res.status(404).send("쿠키에서 사용자 정보를 찾을 수 없습니다.");
        }

        // 클라이언트에서 쿠키에 저장된 사용자id를 전달하도록 요청한다.
        const userId = userData.response.id;

        // DB에서 해당 ID를 가진 사용자 정보를 가져온다.
        const user = await User.findOne({id: userId});

        if(!user){
            return res.status(404).send("해당 ID로 사용자를 찾을 수 없습니다.");
        }

        // 사용자 정보를 클라이언트로 응답 
        return res.json(user);
    }catch(error){
        return res.status(500).send("서버 오류가 발생했습니다.");
    }
}); 

module.exports = { getUserProfile };
