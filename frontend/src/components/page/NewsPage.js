// ../Page/NewsPage.js


import React, { useEffect, useState } from "react";
import MainHeader from "../ui/MainHeader.js";
import Footer from "../ui/Footer.js";
import { StyledTitle } from "../ui/Sns.js";
import MainImage from './../ui/MainImage';

function NewsPage() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetchNewsData();
    }, []);

    const fetchNewsData = async () => {
        try{
            const response = await fetch('/news');
            if(!response.ok){
                throw new Error('서버로부터 데이터를 가져오는 데 실패하였습니다.');
            }

            const data = await response.json();
            setNewsData(data.items);
        }catch(error){
            console.error(error);
        }
    };

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