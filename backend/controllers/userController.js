// ./controllers/userController.js

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// 사용자 프로필 정보 불러오기 
// GET /users/:{id}
const getUserProfile = asyncHandler(async (req, res) => {
    const userId = req.params.id; 

    try{
        const userProfile = await User.findOne({id: userId});

        if(!userProfile){
            return res.status(404).json({success: false, message: "사용자 프로필을 조회할 수 없습니다."});
        }

        // 프로필 정보 응답
        res.status(200).json({ success: true, user: userProfile });
    }catch(err){
        console.error("사용자 프로필 조회 실패:", error);
        res.status(500).json({ success: false, message: "사용자 프로필 조회에 실패했습니다.", error: error.message });
    }
}); 

module.exports = { getUserProfile };
