// ./MainHeader.js

import React from "react";
import { styled } from 'styled-components';


const StyledFooterWrapper = styled.div`
    display: flex;
    width: 100%; /* 너비를 100%로 설정하여 화면에 맞춤 */
    height: 100px;
    margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
    align-items: center;
    background-color: #EEEEEE;
`;

const FooterEmail = styled.p`
    color: #D00F31;
    font-family: "Bold";
    font-size: 20px;
    margin-left: 100px;
`;

const FooterLink = styled.a`
    text-decoration: none;
`;

const FooterLogo = styled.p`
    font-family: "Inline";
    font-size: 40px;
    width: 400px;
    margin-left: 400px;
`;


const Footer = ({ }) => {
    return (
        <>
        <StyledFooterWrapper>
            <FooterLogo>부산갈매기</FooterLogo>

            <FooterLink href="https://github.com/minju-sin/">
                <FooterEmail>Github</FooterEmail>
            </FooterLink>

            <FooterLink href="https://www.instagram.com/">
                <FooterEmail>Insta</FooterEmail>
            </FooterLink>

            <FooterLink href="https://www.notion.so/ancho/b172845225284e28b8816a05e32ce087?pvs=4">
                <FooterEmail>Notion</FooterEmail>
            </FooterLink>
        </StyledFooterWrapper>
        </>
    );
};

export default Footer;
