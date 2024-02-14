// ./MaTalk.js

import React from "react";
import { StyledTitle } from './Sns';
import Button from '@mui/material/Button';


const MaTalk = ({ }) => {
    return (
        <div>
            <StyledTitle>마!톡</StyledTitle>
            {/* 테이블 형태의 글 목록 나열 */}
            <a href="/MaTalkWrite"><Button variant="contained">글쓰기</Button></a>
        </div>
    );
};

export default MaTalk;
