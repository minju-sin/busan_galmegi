import React from "react";
import { styled } from 'styled-components';
import MunsuImg from '../images/Munsu.gif';
import { StyledTitle } from './Sns';
import { StyledIntroP } from "./Sajik";

const Sajik = () => {

    return (
        <div>
            <StyledTitle>문수구장</StyledTitle>
            <img src={MunsuImg}/>
            <StyledIntroP>
                울산광역시 남구 옥동에 위치한 야구장으로 2012년 9월 28일 착공하였으며 2014년 3월 22일 개장하였다.
            </StyledIntroP>
            <StyledIntroP>
                관람석은 총 12,068석으로 고정석(내야)은 8,038석, 잔디석(외야)은 4,000석, 스카이박스 30명이 설치되어 있다.
            </StyledIntroP>
            <StyledIntroP>
                구장 크기는 좌·우 펜스까지 101m, 중앙 펜스까지 122m이며, 2014시즌부터 롯데 자이언츠의 제2홈구장으로 사용되고 있다.
            </StyledIntroP>
            
            <StyledTitle>위치</StyledTitle>
            
        </div>
    );
};

export default Sajik;
