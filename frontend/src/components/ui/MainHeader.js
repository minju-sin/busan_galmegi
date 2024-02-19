// ./MainHeader.js
/*
width: 100%;  너비를 100%로 설정하여 화면에 맞춤 
max-width: 1440px;  최대 너비를 1440px로 제한 
margin: 0 auto;  좌우 여백을 자동으로 설정하여 가운데 정렬 
*/

import React, { useEffect } from "react"; // useEffect import 추가
import { styled } from 'styled-components';
import { useCookies } from "react-cookie";
import logoImage from '../images/Logo.svg';
import NaverLogin from "./NaverLogin";
import Profile from "./Profile";
import axios from "axios";

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
export const StyledLogo = styled.img`
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    height: 50px;
`;

/* 헤더 프로필 메뉴 */
export const StyledProfile = styled.button`
    margin: 0 auto;
    height: 50px;
    background-color: transparent;
    border: 0;
    outline: 0;
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

    useEffect(() => {
        if (cookies.userData) { // userData 쿠키가 있는 경우에만 서버로 요청 보냄
            sendUserDataToServer(cookies.userData);
        }
    }, [cookies.userData]); // userData가 변경될 때마다 실행됨

    const sendUserDataToServer = (userData) => {
        axios.post("/users", { userData })
            .then(response => {
                console.log('데이터 전송에 성공했습니다.', response.data);
            })
            .catch(error => {
                console.error('데이터 전송에 실패했습니다.', error);
            });
    };

    return (
        <>
        <StyledMainHeader>
            <StyledLogo src={logoImage} alt="로고이미지"/>
            <StyledMainLogo>부산갈매기</StyledMainLogo>
            {!cookies.userData && <NaverLogin/>} {/* 쿠키가 존재하지 않으면 네이버로그인 버튼 표시 */}
            {cookies.userData && <Profile/>} {/* 쿠키가 존재하면 프로필 이미지 표시 */}

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
