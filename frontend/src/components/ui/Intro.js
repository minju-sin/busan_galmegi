import React, { useState } from "react";
import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Sajik from './Sajik.js';
import Munsu from './Munsu.js';

const StyledIntroWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 50px auto;
    text-align: center;
`;

const Intro = () => {
    const [selectedStadium, setSelectedStadium] = useState('사직구장');

    const handleButtonClick = (stadium) => {
        setSelectedStadium(stadium);
    };

    return (
        <StyledIntroWrapper>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button onClick={() => handleButtonClick("사직구장")}>사직구장</Button>
                <Button onClick={() => handleButtonClick("문수구장")}>문수구장</Button>
            </ButtonGroup>

            {/* 버튼 클릭하면 구장 소개 보여줌 */}
            {selectedStadium === "사직구장" && (
                <Sajik/>
            )}
            {selectedStadium === "문수구장" && (
                <Munsu/>
            )}
        </StyledIntroWrapper>
    );
};

export default Intro;
