// ../Page/NewsPage.js


import React from "react";
import MainHeader from "../ui/MainHeader.js";
import Footer from "../ui/Footer.js";
import { StyledTitle } from "../ui/Sns.js";
import FetchNewsData from "../hooks/FetchNewsData.js";
import { StyledIntro } from "../ui/Sajik.js";
import MainImg1 from '../images/MainImg1.jpg';

function NewsPage() {
    const newsData = FetchNewsData();

    return (
        <>
            <MainHeader/>
            <StyledIntro>
                <StyledTitle>뉴스</StyledTitle>
                    {newsData.map((newsItem, index) => (
                        <div key={index}>
                            <img src={MainImg1} alt="뉴스" style={{width: '100px', height: '100px'}}/>
                            <a href={newsItem.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: newsItem.title }} />

                            <p dangerouslySetInnerHTML={{ __html: newsItem.description }} />
                            <p>발행일: {newsItem.pubDate}</p>
                        </div>
                    ))}
            </StyledIntro>
            <Footer/>
        </>
    );
}

export default NewsPage;