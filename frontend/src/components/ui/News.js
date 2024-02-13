// ./MainHeader.js

import React from "react";
import { styled } from 'styled-components';
import { StyledTitle } from "./Sns";

const StyledNewsWrapper = styled.div`
    display: flex;
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    max-width: 1080px;
    height: 270px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
    border-radius: 10px;
`;

const StyledNewsImg = styled.img`
    flex-direction: row;
    width: 295px;
    height: 270px;
    flex-shrink: 0;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
`;


const News = ({ }) => {
    return (
        <>
        <StyledTitle>뉴스</StyledTitle>
        <StyledNewsWrapper>
            <StyledNewsImg alt="자이언츠 뉴스1"/>
            <StyledNewsImg alt="자이언츠 뉴스2"/>
            <StyledNewsImg alt="자이언츠 뉴스3"/>
        </StyledNewsWrapper>
        </>
    );
};

export default News;
