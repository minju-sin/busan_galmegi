// ./MaTalk.js

import React from "react";
import Button from '@mui/material/Button';
import { StyledIntro, StyledTitle } from '../styles/Intro/intro.js';
import MainImg1 from '../images/MainImg1.jpg';
import { StyledMainImg, StyledMainText, StyledMainTextContainer, StyledMainTitle, StyledNewsDiv } from "../styles/News/news.js";

function MaTalk() {
    return (
        <StyledIntro>
            <StyledTitle>마!톡</StyledTitle>

            {/* todo: 테이블 형태의 글 목록 나열 */}
            <StyledNewsDiv>
                <StyledMainImg src={MainImg1} alt="뉴스" />

                <StyledMainTextContainer>
                    <StyledMainTitle>제목</StyledMainTitle>
                    <StyledMainText>내용</StyledMainText>
                    <StyledMainText>작성자</StyledMainText>
                </StyledMainTextContainer>
            </StyledNewsDiv>

            <a href="/maTalk/write"><Button variant="contained">글쓰기</Button></a>
        </StyledIntro>
    );
};

export default MaTalk;
