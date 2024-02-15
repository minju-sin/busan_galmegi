// server.js

const express = require('express');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");

const app = express();

dbConnect();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// get 요청
app.get('/api/userData', (req, res) => {
    res.send(`hello`);
});

app.listen(8080, () => {
    console.log("서버 실행 중"); // 8080번 포트로 서버 실행
});