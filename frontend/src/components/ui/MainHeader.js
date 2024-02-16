// ./MainHeader.js
/*
width: 100%;  너비를 100%로 설정하여 화면에 맞춤 
max-width: 1440px;  최대 너비를 1440px로 제한 
margin: 0 auto;  좌우 여백을 자동으로 설정하여 가운데 정렬 
*/

import React from "react";
import { styled } from 'styled-components';
import { useCookies } from "react-cookie";
import logoImage from '../images/Logo.svg';
import profileImage from '../images/profile.svg';
import NaverLogin from "./NaverLogin";

/* 헤더 div */
const StyledMainHeader = styled.div`
    display: flex;
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    //max-width: 1440px; /* 최대 너비를 1440px로 제한 */
    height: 80px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
    flex-shrink: 0;
    background-color: #041E42;
`;

/* 헤더 로고 p */
const StyledMainLogo = styled.p`
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    //max-width: 1440px; /* 최대 너비를 1440px로 제한 */
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    width: 200px;
    color: #fff;
    text-align: center;
    font-family: "Inline";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

/* 헤더 로고 이미지 */
const StyledLogo = styled.img`
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    height: 50px;
`;

/* 네비게이션 div */
const StyledNavi = styled.div`
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    //max-width: 1440px; /* 최대 너비를 1440px로 제한 */
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    flex-shrink: 0;
    display: flex;
    justify-content: center;
`;

/* 네비게이션 a */
const StyledNavia = styled.a`
    color: black; // D00F31 빨강
    text-align: center;
    font-family: "Bold";
    font-size: 20px;
    width: 105px;
    flex-direction: row;
    cursor: pointer;
    text-decoration: none;
`;


const MainHeader = ({ }) => {

    const [cookies] = useCookies(["userData"]); // "userData" 쿠키 가져오기


    return (
        <>
        <StyledMainHeader>
            <StyledLogo src={logoImage} alt="로고이미지"/>
            <StyledMainLogo>부산갈매기</StyledMainLogo>
            <NaverLogin/>
            {cookies.userData && <img src={profileImage} alt="프로필"/>} {/* 쿠키가 존재하면 프로필 이미지 표시 */}

        </StyledMainHeader>

        <StyledNavi>
            <StyledNavia href="/">미디어</StyledNavia>
            <StyledNavia href="/intro">소개</StyledNavia>
            <StyledNavia href="https://www.giantsclub.com/html/?pcode=257">경기/중계</StyledNavia>
            <StyledNavia href="/maTalk">마!톡</StyledNavia>
            <StyledNavia href="https://ticket.giantsclub.com/loginForm.do">티켓</StyledNavia>
        </StyledNavi>
        </>
    );
};

export default MainHeader;
