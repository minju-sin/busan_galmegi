// ./controllers/newsController.js

const asyncHandler = require("express-async-handler");
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.SECRET;

// 네이버 뉴스 API 
// GET /news
const getNaverNews = asyncHandler(async (req, res) => {
    
    const api_url = 'https://openapi.naver.com/v1/search/news.json?query=' + encodeURI('롯데자이언츠'); // JSON 결과 야구에 대한 뉴스

    try {
        const response = await fetch(api_url, {
            headers:{
                'X-Naver-Client-Id': client_id, 
                'X-Naver-Client-Secret': client_secret
            }
        });
        
        if (!response.ok) {
            throw new Error('네이버 API 요청에 실패했습니다.');
        }
        
        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류 발생' });
    }

});

module.exports = { getNaverNews };
