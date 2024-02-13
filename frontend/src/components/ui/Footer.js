// ./MainHeader.js

import React from "react";
import { styled } from 'styled-components';

const StyledFooterWrapper = styled.div`
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    height: 350px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
    background-color: #EEEEEE;
`;

const FooterLogo = styled.p`
text-align: center;
font-family: "Regular";
font-size: 40px;
`;


const MainHeader = ({ }) => {
    return (
        <>
        <StyledFooterWrapper>
            <FooterLogo>
            롯데 자이언츠 팬들이 편하게 소통할 수 있는 공간을 직접 만듦으로써 풀스택 공부
            </FooterLogo>
            
        </StyledFooterWrapper>
        </>
    );
};

export default MainHeader;
