// ./MainHeader.js

import React from "react";
import { styled } from 'styled-components';
import logoImage from '../images/Logo.svg';
import profileImage from '../images/profile.svg';

/* 헤더 div */
const StyledMainHeader = styled.div`
    display: flex;
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    max-width: 1440px; /* 최대 너비를 1440px로 제한 */
    height: 127px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
    flex-shrink: 0;
    background-color: #041E42;
`;

/* 헤더 로고 p */
const StyledMainLogo = styled.p`
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    max-width: 1440px; /* 최대 너비를 1440px로 제한 */
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    width: 641px;
    color: #D00F31;
    text-align: center;
    font-family: "Inline";
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

/* 헤더 로고 이미지 */
const StyledLogo = styled.img`
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    height: 80px;
`;

/* 네비게이션 div */
const StyledNavi = styled.div`
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    max-width: 1440px; /* 최대 너비를 1440px로 제한 */
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    flex-shrink: 0;
    display: flex;
    justify-content: center;
`;

/* 네비게이션 p */
const StyledNaviP = styled.p`
    color: #000;
    text-align: center;
    font-family: "Bold";
    font-size: 20px;
    width: 105px;
    flex-direction: row;
`;

const MainHeader = ({ }) => {
    return (
        <>
        <StyledMainHeader>
            <StyledLogo src={logoImage} alt="로고이미지"/>
            <StyledMainLogo>부산갈매기</StyledMainLogo>
            <StyledLogo src={profileImage} alt="프로필"/>
        </StyledMainHeader>

        <StyledNavi>
            <StyledNaviP>미디어</StyledNaviP>
            <StyledNaviP>소개</StyledNaviP>
            <StyledNaviP>경기/중계</StyledNaviP>
            <StyledNaviP>마!톡</StyledNaviP>
            <StyledNaviP>티켓</StyledNaviP>
        </StyledNavi>
        </>
    );
};

export default MainHeader;
