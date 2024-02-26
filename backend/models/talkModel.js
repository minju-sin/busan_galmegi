// 사용자 스키마 생성
const mongoose = require("mongoose");

/*
    title: 제목입니다.
    comment: 내용입니다.
    nickname: '아무개',
    file: 'https://ssl.pstatic.net/static/pwe/address/img_profile.png'
*/

//  새로운 객체 인스턴스 생성
const talkSchema = new mongoose.Schema(
    {
        title: {
            // 타입과 필수 속성
            type: String,
            require: [true, "제목은 꼭 기입해 주세요."],
        },
        comment:{
            type: String,
            require: true
        },
        nickname:{
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
const Talk = mongoose.model("Talk", talkSchema);

module.exports = Talk;