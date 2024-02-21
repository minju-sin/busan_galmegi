// server.js

const express = require('express');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser'); // 쿠키 파서 미들웨어 추가
dbConnect(); // DB 연결

// cors 설정
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(cookieParser()); // 쿠키 파서 미들웨어 사용

// 네이버 간단로그인
app.use("/naver", require("./routes/naverRoute"));

// 사용자
app.use("/users", require("./routes/userRoute"));

// 쿠키에 저장된 사용자 정보를 확인하는 엔드포인트
app.get("/checkCookie", (req, res) => {
    const userData = req.cookies.userData;
    if (userData) {
        res.json(userData);
    } else {
        res.send('No userData found in cookies');
    }
});

app.listen(8080, () => {
    console.log("서버 실행 중"); // 8080번 포트로 서버 실행
});
