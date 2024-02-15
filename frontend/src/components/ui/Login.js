import React from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { StyledSign, StyledSignInput, StyledSignOne } from "./Sign";

const StyledLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 400px;
    margin: 200px auto;
    border-radius: 10px;
    background-color: #eee;
`;

const Sign = () => {
    return (
        <StyledLoginWrapper>
            <StyledSign>로그인</StyledSign>
            <StyledSignOne>
                <StyledSignInput 
                    type="text" 
                    id="userId"
                    placeholder="아이디"
                />
            </StyledSignOne>
            <StyledSignOne>
                <StyledSignInput 
                    type="password" 
                    id="password"
                    placeholder="비밀번호"
                />
            </StyledSignOne>
            
            <Button variant="contained">로그인</Button>
        </StyledLoginWrapper>
    );
};

export default Sign;
