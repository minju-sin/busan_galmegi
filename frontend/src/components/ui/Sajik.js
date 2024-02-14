import React from "react";
import { styled } from 'styled-components';
import SajikImg from '../images/Sajik.gif';
import { StyledTitle } from './Sns';

export const StyledIntroP = styled.p`
    width: 100%;
    max-width: 1080px;
    margin: 10px auto;
    font-family: "Regular";
    font-size: 15px;
    text-align: center;
`;

const Sajik = () => {

    return (
        <div>
            <StyledTitle>사직구장</StyledTitle>
            <img src={SajikImg}/>
            <StyledIntroP>
                대한민국 부산광역시 동래구 사직동에 있는 야구장으로 1985년 10월에 완공되었으며 23,646석의 관람석이 있다.
            </StyledIntroP>
            <StyledIntroP>
                구장 크기는 좌·우 펜스까지 95m, 중앙 펜스까지 118m이고, 펜스 높이가 펜스 상단 철망을 포함해서 4.8m다. 외형은 일본 요코하마 스타디움과 비슷하다.
            </StyledIntroP>
            <StyledIntroP>
                본래는 야구는 물론 축구나 럭비 등 다양한 종목의 경기가 함께 열릴 수 있는 다용도 종합경기장으로 지어졌다.
            </StyledIntroP>
            <StyledIntroP>
                그래서 내야 관중석은 가변식이었으나, 지금은 야구 경기만 치르고 있어 내야석을 이동할 일은 없다.
            </StyledIntroP>

            <StyledTitle>위치</StyledTitle>
            
        </div>
    );
};

export default Sajik;
