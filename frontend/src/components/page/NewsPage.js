import React from "react";
import MainHeader from "../ui/MainHeader.js";
import Footer from "../ui/Footer.js";
import { StyledTitle } from "../ui/Sns.js";
import FetchNewsData from "../hooks/FetchNewsData.js";
import { StyledIntro } from "../ui/Sajik.js";
import MainImg1 from '../images/MainImg1.jpg';
import styled from "styled-components";
import { formatDate } from './../common/formatDate';

export const StyledNewsDiv = styled.div`
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s; 
    
    &:hover {
        color: #D00F31; 
    }
`;

export const StyledMainImg = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border-radius: 10px;
`;

export const StyledMainTextContainer = styled.div`
    flex: 1;
`;

export const StyledMainTitle = styled.p`
    font-family: 'Bold';
    font-size: 25px;
    margin-bottom: 30px;
`;

export const StyledMainText = styled.p`
    font-family: 'Regular';
    font-size: 15px;
`;

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
