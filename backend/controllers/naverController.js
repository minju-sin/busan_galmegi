const asyncHandler = require("express-async-handler");

const crypto = require('crypto');
// 랜덤한 문자열 생성
const randomState = crypto.randomBytes(20).toString('hex');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.SECRET;
var state = randomState;
var redirectURI = encodeURI("http://localhost:8080/naver/oAuth/callback");

// 네이버 로그인 버튼
// GET /naver/login
const getNaverButton = asyncHandler (async (req, res) => {
    
    const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' 
    + client_id 
    + '&redirect_uri=' 
    + redirectURI 
    + '&state=' 
    + state;

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");

});

const getNaverCallback = asyncHandler (async (req, res) => {

    code = req.query.code;
    state = req.query.state;

    const api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + client_id 
    + '&client_secret=' 
    + client_secret 
    + '&redirect_uri=' 
    + redirectURI 
    + '&code=' 
    + code 
    + '&state=' 
    + state;

    const response = await fetch(api_url, {
        headers: 
        {
            'X-Naver-Client-Id':client_id, 
            'X-Naver-Client-Secret': client_secret
        }
    });

    const tokenRequest = await response.json();
    return res.send(tokenRequest);

});

module.exports = {getNaverButton, getNaverCallback};