import React from "react";
import { styled } from 'styled-components';
import Youtube  from '../images/Youtube.jpg';
import Instagram  from '../images/Instagram.jpg';
import Facebook  from '../images/Facebook.jpg';

export const StyledTitle = styled.p`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    color: #000;
    font-family: "Bold";
    font-size: 40px;
`;

const StyledSNSWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1080px;
    height: 120px;
    margin: 0 auto;
    align-items: center;
`;

const StyledSNSImgLink = styled.a`
    flex-direction: row;
    width: 295px;
    height: 120px;
    flex-shrink: 0;
    margin: 0 auto;
    align-items: center;
    border-radius: 10px;
    cursor: pointer; /* 마우스 포인터를 손가락 모양으로 변경하여 클릭 가능함을 나타냄 */
`;

const StyledSNSImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 div 요소에 꽉 차게 */
    border-radius: 10px;
`;

const Sns = () => {
    return (
        <>
        <StyledTitle>SNS</StyledTitle>
        <StyledSNSWrapper>
            <StyledSNSImgLink href="https://www.youtube.com/channel/UCAZQZdSY5_YrziMPqXi-Zfw">
                <StyledSNSImg src={Youtube} alt="자이언츠 유튜브" />
            </StyledSNSImgLink>
            <StyledSNSImgLink href="https://www.instagram.com/busanlottegiants/">
                <StyledSNSImg src={Instagram} alt="자이언츠 인스타" />
            </StyledSNSImgLink>
            <StyledSNSImgLink href="https://www.facebook.com/lottegiantsbusan/">
                <StyledSNSImg src={Facebook} alt="자이언츠 페이스북" />
            </StyledSNSImgLink>
        </StyledSNSWrapper>
        </>
    );
};

export default Sns;
