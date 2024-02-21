// ../Page/NewsPage.js


import React from "react";
import MainHeader from "../ui/MainHeader.js";
import Footer from "../ui/Footer.js";
import { StyledTitle } from "../ui/Sns.js";
import FetchNewsData from "../hooks/FetchNewsData.js";

function NewsPage() {
    const newsData = FetchNewsData();

    return (
        <>
            <MainHeader/>
            <div>
                <StyledTitle>뉴스</StyledTitle>
                <ul>
                    {newsData.map((newsItem, index) => (
                        <li key={index}>
                            <a href={newsItem.link} target="_blank" rel="noopener noreferrer">{newsItem.title}</a>
                            <p>{newsItem.description}</p>
                            <p>발행일: {newsItem.pubDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </>
    );
}

export default NewsPage;