// server.js
const express = require('express');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const app = express();
dbConnect();    //  DB 연결

// cors 설정
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// 네이버 간단로그인
app.use("/naver", require("./routes/naverRoute"));

// 사용자 
app.use("/users", require("./routes/userRoute"));

app.listen(8080, () => {
    console.log("서버 실행 중"); // 8080번 포트로 서버 실행
});