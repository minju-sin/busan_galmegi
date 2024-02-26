// ../ui/MaTalkDetail.js


import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { StyledIntro, StyledTitle } from "../styles/Intro/intro";

function MaTalkDetail() {


    return (
        <StyledIntro>
            <p>이전</p>
            <StyledTitle>제목</StyledTitle>
            <p>내용</p>

            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button 
                    sx={{ 
                    backgroundColor: '#041E42', 
                    color: 'white', 
                    '&:hover': { backgroundColor: '#303f9f' }, fontFamily:"Regular",
                    width: '150px',
                    height: '50px'
                    }}
                >
                    수정하기
                </Button>
                <Button 
                    sx={{ 
                    backgroundColor: '#D00F31',
                    color: 'white', 
                    '&:hover': { backgroundColor: '#d32f2f' },
                    fontFamily:"Regular",
                    width: '150px',
                    height: '50px'
                    }}
                >
                    삭제하기
                </Button>
            </ButtonGroup>
        </StyledIntro>
    );
}

export default MaTalkDetail;