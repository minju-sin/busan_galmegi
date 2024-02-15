// 사용자 스키마 생성

const mongoose = require("mongoose");

//  새로운 객체 인스턴스 생성
const userSchema = new mongoose.Schema(
    {
        userId: {
            // 타입과 필수 속성
            type: String,
            require: true
        },
        password: {
            // 타입과 필수 속성
            type: String,
            maxlength: 12,
            require: true
        },
        name: {
            // 타입과 필수 속성
            type: String,
            require: true
        },
        email: {
            type: String
        },
        nickname:{
            type: String,
            require: [true, "닉네임은 꼭 기입해 주세요."],
            unique: 1 // 중복 허용 안함 
        },
    },
    {
         // timestamps는 자료가 작성, 수정될 때 자동으로 시간을 기록해주는 속성 
        timestamps: true
    }
)

// 스키마 -> 모델 
// mongoose.model(모델명, 스키마명);
const User = mongoose.model("User", userSchema);

module.exports = User;