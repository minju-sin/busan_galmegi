// ./MaTalk.js

import React from "react";
import { StyledTitle } from './Sns';
import Button from '@mui/material/Button';
import { StyledIntro } from "./Sajik";


function MaTalk() {
    return (
        <StyledIntro>
            <StyledTitle>마! 톡</StyledTitle>
            {/* 테이블 형태의 글 목록 나열 */}
            <a href="/maTalk/write"><Button variant="contained">글쓰기</Button></a>
        </StyledIntro>
    );
};

export default MaTalk;
