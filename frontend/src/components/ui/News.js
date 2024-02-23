// ./News.js

import React from "react";
import { StyledTitle } from "../styles/Intro/intro.js";
import { StyledMoreLink, StyledMoreImg,  StyledNewsWrapper, StyledNewsImg} from "../styles/News/mainNews.js";
import MainImg1 from '../images/MainImg1.jpg';
import SeeMore from '../images/SeeMore.svg';
import FetchNewsData from "../hooks/FetchNewsData.js";



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
