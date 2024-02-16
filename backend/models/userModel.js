// 사용자 스키마 생성
const mongoose = require("mongoose");

/*
    id: 'qbOb8J_hmn5l43ctSIH40IFY1mkyBIW2Fdeijfda',
    nickname: '아무개',
    profile_image: 'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
    email: 'abc@naver.com',
    mobile: '010-0000-0000',
    mobile_e164: '+821000000000',
    name: '아무개'
*/

//  새로운 객체 인스턴스 생성
const userSchema = new mongoose.Schema(
    {
        id: {
            // 타입과 필수 속성
            type: String,
            require: true
        },
        nickname:{
            type: String,
            require: [true, "닉네임은 꼭 기입해 주세요."],
            unique: 1 // 중복 허용 안함 
        },
        profile_image: {
            
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        mobile: {
            type: String,
            require: true
        },
        mobile_e164:{
            type: String,
            require: true
            
        },
        name:{
            type: String,
            require: true
        }
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