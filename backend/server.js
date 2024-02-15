// server.js

const crypto = require('crypto');
// 랜덤한 문자열 생성
const randomState = crypto.randomBytes(20).toString('hex');

const express = require('express');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const app = express();
dbConnect();    //  DB 연결

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.SECRET;
var state = randomState;
var redirectURI = encodeURI("http://localhost:8080/api/oAuth/naver/callback");
var api_url = "";

// cors 설정
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use("/users", require("./routes/userRoute"));

app.get('/naverlogin', function (req, res) {
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
 });

 app.get('/api/oAuth/naver/callback', function (req, res) {
    code = req.query.code;
    state = req.query.state;
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  });


app.listen(8080, () => {
    console.log("서버 실행 중"); // 8080번 포트로 서버 실행
});