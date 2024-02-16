// ./controllers/naverController.js

const asyncHandler = require("express-async-handler");
const cookieParser = require('cookie-parser');
const User = require("../models/userModel");

const crypto = require('crypto');

// 랜덤한 문자열 생성
const randomState = crypto.randomBytes(20).toString('hex');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.SECRET;
var state = randomState;
var redirectURI = encodeURI(process.env.CALLBACK_URL);

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

// 네이버로그인 토큰 요청
// GET /naver/oAuth/callback
const getNaverCallback = asyncHandler(async (req, res) => {
    // 토큰을 발급받으려면 query string으로 넘겨야 할 정보들이다.
    code = req.query.code;
    state = req.query.state;

    // 로그인 API를 사용해 access token을 발급받는다.
    const api_url =
        'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=' +
        client_id +
        '&client_secret=' +
        client_secret +
        '&redirect_uri=' +
        redirectURI +
        '&code=' +
        code +
        '&state=' +
        state;

    const response = await fetch(api_url, {
        headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
        },
    });

    // JSON 형식으로 access token 받아온다.
    const tokenRequest = await response.json();

    // 회원 프로필 조회 API
    if ('access_token' in tokenRequest) {
        const { access_token } = tokenRequest;
        const apiUrl = 'https://openapi.naver.com/v1/nid/me';

        const data = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        // 회원 정보 JSON 형식으로 받아온다.
        const userData = await data.json();

        // DB(User)에 회원 정보를 저장한다.
        const { id, nickname, profile_image, email, mobile, mobile_e164, name } = userData.response;

        try {
            // 이미 등록된 사용자인지 확인
            const existingUser = await User.findOne({ email: email });

            if (existingUser) {
                console.log('이미 등록된 사용자입니다.');
                res.status(200).json({ success: true });
                return;
            } else {
                // 등록되지 않은 사용자라면 회원 정보 저장
                const newUser = await User.create({
                    id: id,
                    nickname: nickname,
                    profile_image: profile_image,
                    email: email,
                    mobile: mobile,
                    mobile_e164: mobile_e164,
                    name: name,
                });

                console.log('새로운 사용자 추가!', newUser);
            }
        } catch (error) {
            console.error('사용자 추가 중 오류 발생:', error);
            res.status(500).json({ success: false, error: '사용자 추가 중 오류 발생' });
            return;
        }

        // 쿠키에 사용자 정보 저장
        res.cookie(
            'userData',
            {
                ...userData,
                access_token: access_token,
            },
            {
                maxAge: 10000000,
            }
        );
        
        // 리다이렉트
        res.redirect('http://localhost:3000/');
    } else {
        res.status(400).json({ success: false, error: 'Access token not found in response' });
    }
});


module.exports = {getNaverButton, getNaverCallback};