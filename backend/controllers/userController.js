// ./controllers/userController.js

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// 사용자 정보 저장하기 
// POST /users
const saveUserData = asyncHandler(async (req, res) => {
    const { id, nickname, profile_image, email, mobile, mobile_e164, name } = req.body.userData; // 클라이언트에서 전송된 userData

    try {
        // 이미 데이터베이스에 해당 id가 존재하는지 확인
        const existingUser = await User.findOne({ id: id });

        // 이미 존재하는 사용자인 경우 저장하지 않고 바로 응답
        if (existingUser) {
            console.log("이미 존재합니다.");
            return res.status(400).json({ success: false, message: "해당 사용자는 이미 존재합니다." });
        }

        // 존재하지 않는 사용자인 경우 저장
        const newUser = await User.create({
            id: id,
            nickname: nickname,
            profile_image: profile_image,
            email: email,
            mobile: mobile,
            mobile_e164: mobile_e164,
            name: name,
        });

        console.log("사용자 정보가 성공적으로 저장되었습니다.");
        res.status(201).json({ success: true, message: "사용자 정보가 성공적으로 저장되었습니다.", user: newUser });
    } catch (error) {
        console.log("사용자 저장 실패", err);
        res.status(500).json({ success: false, message: "사용자 정보 저장에 실패했습니다.", error: error.message });
    }
});

// 사용자 프로필 정보 불러오기 
// GET /users/:{id}

module.exports = { saveUserData };
