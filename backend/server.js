// server.js

const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// post 요청
app.post('/api/userData', (req, res) => {
    console.log(req.body);
    res.json('Data received'); // json 형태로 응답을 보냄 
});

app.listen(8000, () => {
    console.log("서버 실행 중"); // 8000번 포트로 서버 실행
});