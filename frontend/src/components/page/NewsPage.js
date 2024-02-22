import React from "react";
import MainHeader from "../ui/MainHeader.js";
import Footer from "../ui/Footer.js";
import { StyledTitle } from "../ui/Sns.js";
import FetchNewsData from "../hooks/FetchNewsData.js";
import { StyledIntro } from "../ui/Sajik.js";
import MainImg1 from '../images/MainImg1.jpg';
import styled from "styled-components";

const StyledNewsDiv = styled.div`
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s; 
    
    &:hover {
        color: #D00F31; 
    }
`;

const StyledMainImg = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border-radius: 10px;
`;

const StyledMainTextContainer = styled.div`
    flex: 1;
`;

const StyledMainTitle = styled.p`
    font-family: 'Bold';
    font-size: 25px;
    margin-bottom: 30px;
`;

const StyledMainText = styled.p`
    font-family: 'Regular';
    font-size: 15px;
`;

// 날짜 변환 함수
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}년 ${month}월 ${day}일 ${hours}시${minutes}분`;
}

function NewsPage() {
    const newsData = FetchNewsData();

    return (
        <>
            <MainHeader/>
            <StyledIntro>
                <StyledTitle>뉴스</StyledTitle>
                    {newsData.map((newsItem, index) => (
                        <StyledNewsDiv key={index} onClick={() => window.open(newsItem.link, "_blank", "noopener noreferrer")}>
                            <StyledMainImg src={MainImg1} alt="뉴스" />

                            <StyledMainTextContainer>
                                <StyledMainTitle dangerouslySetInnerHTML={{ __html: newsItem.title }} />
                                <StyledMainText dangerouslySetInnerHTML={{ __html: newsItem.description }} />
                                <StyledMainText>{formatDate(newsItem.pubDate)}</StyledMainText>
                            </StyledMainTextContainer>
                        </StyledNewsDiv>
                    ))}
            </StyledIntro>
            <Footer/>
        </>
    );
}

export default NewsPage;
