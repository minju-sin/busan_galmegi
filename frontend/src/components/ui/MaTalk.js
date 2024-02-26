// ./MaTalk.js

import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { StyledIntro, StyledTitle } from '../styles/Intro/intro.js';
import MainImg1 from '../images/MainImg1.jpg';
import { StyledMainImg, StyledMainText, StyledMainTextContainer, StyledMainTitle, StyledNewsDiv } from "../styles/News/news.js";
import { formatDate } from "../common/formatDate.js";

function MaTalk() {
    const [talks, setTalks] = useState([]);

    useEffect(() => {
        // 서버로부터 게시글을 가져오는 함수
        const fetchTalks = async () => {
            try {
                const response = await fetch('/talks'); // 서버의 엔드포인트로 GET 요청 보내기
                if (!response.ok) {
                    throw new Error('서버로부터 게시글을 가져오는데 실패했습니다.');
                }
                const data = await response.json(); // JSON 형태로 응답 받기
                setTalks(data); // 게시글을 상태에 저장하기
            } catch (error) {
                console.error('게시글을 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchTalks(); // 페이지가 로드될 때 게시글을 가져오는 함수 호출
    }, []);

    return (
        <StyledIntro>
            <StyledTitle>마!톡</StyledTitle>

            {talks.map((talk, index) => (
            <StyledNewsDiv key={index}>
                <StyledMainImg src={MainImg1} alt="뉴스" />

                    <StyledMainTextContainer key={index}>
                        <StyledMainTitle>{talk.title}</StyledMainTitle>
                        <StyledMainText>{talk.comment}</StyledMainText>
                        <StyledMainText>{talk.nickname}</StyledMainText>
                        <StyledMainText>{formatDate(talk.createdAt)}</StyledMainText>
                    </StyledMainTextContainer>
            </StyledNewsDiv>
            ))}

            <a href="/maTalk/write"><Button variant="contained">글쓰기</Button></a>
        </StyledIntro>
    );
};

export default MaTalk;
