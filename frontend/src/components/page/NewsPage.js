import React from "react";
import MainHeader from "../ui/MainHeader.js";
import Footer from "../ui/Footer.js";
import FetchNewsData from "../hooks/FetchNewsData.js";
import { StyledTitle, StyledIntro } from '../styles/Intro/intro.js';
import MainImg1 from '../images/MainImg1.jpg';
import { formatDate } from './../common/formatDate';
import { StyledMainImg, StyledMainText, StyledMainTextContainer, StyledNewsDiv, StyledMainTitle } from "../styles/News/news.js";

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
