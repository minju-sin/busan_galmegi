// ./MainHeader.js

import React from "react";
import { styled } from 'styled-components';
import { StyledTitle } from "./Sns";
import MainImg1 from '../images/MainImg1.jpg';
import SeeMore from '../images/SeeMore.svg';
import FetchNewsData from "../hooks/FetchNewsData.js";

const StyledMoreLink = styled.a`
    color: #9B9A9A;
    margin-left: 900px;
    cursor: pointer;
    text-decoration: none; /* 밑줄 제거 */
    font-size: 14px; /* 더보기 글씨 크기 조정 */
`;

const StyledMoreImg = styled.img`
    width: 14px;
    height: 14px;
    flex-shrink: 0;
`;

const StyledNewsWrapper = styled.div`
    display: flex;
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    max-width: 1080px;
    height: 270px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
`;

const StyledNewsImg = styled.img`
    flex-direction: row;
    width: 295px;
    height: 270px;
    flex-shrink: 0;
    margin: 0 30px 50px; /* 좌우 여백 20px 추가 */
    align-items: center;
    border-radius: 10px;
`;


function News() {
    const newsData = FetchNewsData();

    return (
        <>
        <StyledTitle>뉴스
            <StyledMoreLink href="/news">더보기<StyledMoreImg src={SeeMore}/></StyledMoreLink>
        </StyledTitle>
        
        <StyledNewsWrapper>
            {newsData.slice(0, 3).map((newsItem, index) => (
                <a key={index} href={newsItem.link} target="_blank" rel="noopener noreferrer">
                    <StyledNewsImg src={MainImg1} alt={`자이언츠 뉴스${index + 1}`} />
                </a>
            ))}
        </StyledNewsWrapper>
        </>
    );
};

export default News;
